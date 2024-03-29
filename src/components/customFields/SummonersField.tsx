import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

import { useFormContext } from "react-hook-form";

import { Buildable, WrappedInput, Field, Button } from "@daohaus/ui";
import { ValidateField } from "@daohaus/utils";
import {
  SUMMONER_FIELD_LOOT,
  SUMMONER_FIELD_MEMBER,
  SUMMONER_FIELD_SHARES,
} from "../../utils/summonTx";

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  // TODO: handle mobile here w/ media query
  div {
    width: 17%;
    div {
      width: 100%;
    }
  }

  div:first-child {
    width: 48%;
    div {
      width: 100%;
    }
  }
`;

const CancelButton = styled(Button)`
  margin-top: 3rem;
`;

export const SummonersField = (props: Buildable<Field>) => {
  const { unregister, getValues } = useFormContext();

  const [rows, setRows] = useState<string[]>([]);

  const votingLabel = getValues("tokenSymbol");
  const nonVotingLabel = getValues("lootTokenSymbol");

  useEffect(() => {
    const members = getValues("members");

    if (!members) {
      setRows([uuidv4().substring(0, 8)]);
    } else {
      console.log("useEffect members", members);
      setRows([...Object.keys(members)]);
    }
  }, []);

  const handleAdd = () => {
    setRows((prevState) => {
      return [...prevState, uuidv4().substring(0, 8)];
    });
  };

  const handleRemove = async (slotNumber: string) => {
    console.log("removing slotNumber", slotNumber);

    unregister([
      `members.${slotNumber}.${SUMMONER_FIELD_MEMBER}`,
      `members.${slotNumber}.${SUMMONER_FIELD_SHARES}`,
      `members.${slotNumber}.${SUMMONER_FIELD_LOOT}`,
    ]);

    await setRows((prevState) => {
      const newState = [...prevState.filter((slot) => slot !== slotNumber)];
      return newState;
    });
  };

  return (
    <>
      {rows.map((slotNumber: string) => {
        return (
          <RowWrapper key={slotNumber}>
            <WrappedInput
              {...props}
              label="Member"
              id={`members.${slotNumber}.${SUMMONER_FIELD_MEMBER}`}
              placeholder="0x..."
              rules={{ validate: ValidateField.ethAddress, required: true }}
            />
            <WrappedInput
              {...props}
              label={votingLabel}
              id={`members.${slotNumber}.${SUMMONER_FIELD_SHARES}`}
              rules={{ validate: ValidateField.number, required: true }}
              placeholder="0"
            />
            <WrappedInput
              {...props}
              label={nonVotingLabel}
              id={`members.${slotNumber}.${SUMMONER_FIELD_LOOT}`}
              rules={{ validate: ValidateField.number, required: true }}
              placeholder="0"
            />
            {rows.length > 1 && (
              <CancelButton
                onClick={() => handleRemove(slotNumber)}
                variant="ghost"
              >
                <RiCloseLine fontSize="3rem" />
              </CancelButton>
            )}
          </RowWrapper>
        );
      })}
      <div>
        <Button onClick={handleAdd} color="secondary">
          Add
        </Button>
      </div>
    </>
  );
};
