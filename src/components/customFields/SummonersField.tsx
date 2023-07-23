import React, { useState } from "react";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

import { useFormContext } from "react-hook-form";

import { Buildable, WrappedInput, Field, Input, Button } from "@daohaus/ui";
import { ValidateField } from "@daohaus/utils";
import {
  SUMMONER_FIELD_LOOT,
  SUMMONER_FIELD_MEMBER,
  SUMMONER_FIELD_PREFIX,
  SUMMONER_FIELD_SHARES,
} from "../../utils/summonTx";

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
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

export const SummonersField = (props: Buildable<Field>) => {
  const { unregister } = useFormContext();

  // TODO: need to handle coming back on a previous button
  // will need to useEffect and look at formvalues to see if we have summoner set and then fill in rows based on that
  // or not use rows and only formValues somehow

  const [rows, setRows] = useState<string[]>([uuidv4().substring(0, 8)]);

  const handleAdd = () => {
    setRows((prevState) => {
      return [...prevState, uuidv4().substring(0, 8)];
    });
  };

  const handleRemove = async (slotNumber: string) => {
    console.log("removing slotNumber", slotNumber);

    unregister([
      `${SUMMONER_FIELD_PREFIX}-${SUMMONER_FIELD_MEMBER}-${slotNumber}`,
      `${SUMMONER_FIELD_PREFIX}-${SUMMONER_FIELD_SHARES}-${slotNumber}`,
      `${SUMMONER_FIELD_PREFIX}-${SUMMONER_FIELD_LOOT}-${slotNumber}`,
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
              id={`${SUMMONER_FIELD_PREFIX}-${SUMMONER_FIELD_MEMBER}-${slotNumber}`}
              placeholder="0x666..."
              rules={{ validate: ValidateField.ethAddress, required: true }}
            />
            <WrappedInput
              {...props}
              label="Voting"
              id={`${SUMMONER_FIELD_PREFIX}-${SUMMONER_FIELD_SHARES}-${slotNumber}`}
              rules={{ validate: ValidateField.number, required: true }}
              defaultValue="0"
            />
            <WrappedInput
              {...props}
              label="Non-Voting"
              id={`${SUMMONER_FIELD_PREFIX}-${SUMMONER_FIELD_LOOT}-${slotNumber}`}
              rules={{ validate: ValidateField.number, required: true }}
              defaultValue="0"
            />
            {rows.length > 1 && (
              <Button onClick={() => handleRemove(slotNumber)} variant="ghost">
                <RiCloseLine fontSize="3rem" />
              </Button>
            )}
          </RowWrapper>
        );
      })}
      <div>
        <Button onClick={handleAdd} variant="outline">
          Add
        </Button>
      </div>
    </>
  );
};
