import React, { useState } from "react";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

import { RegisterOptions, useFormContext } from "react-hook-form";

import { Buildable, WrappedInput, Field, Input, Button } from "@daohaus/ui";
import { ValidateField } from "@daohaus/utils";

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

export const validateMemberData = (
  memberData: Record<string, string[]> | ""
) => {
  console.log("memberData", memberData);

  return true;
};

export const validateEthAddress = (val: Record<string, string[]> | "") => {
  console.log("val", val);

  // return true;

  return "WRONG";
};

export const SummonersField = (props: Buildable<Field>) => {
  // either put into members on each watch or validate in the boig list and format in the tx arg handler
  // - validating here allows for error messaging
  // members: {
  //   memberAddresses: ["0x83aB8e31df35AA3281d630529C6F4bf5AC7f7aBF"],
  //   memberShares: ["10"],
  //   memberLoot: ["1"],
  // },
  const { id } = props;

  const { watch, getValues, setValue, register, unregister } = useFormContext();

  const [rows, setRows] = useState<string[]>([uuidv4().substring(0, 8)]);
  // const multipleSharesField = watch("addressesAndAmounts");

  const newRules: RegisterOptions = {
    ...props.rules,
    // setValueAs: transformAddressesAndAmountsData,
    validate: validateMemberData,
  };

  // watch((data, { name, type }) => console.log(data, name, type));

  const handleAdd = () => {
    console.log("rows");
    setRows((prevState) => {
      return [...prevState, uuidv4().substring(0, 8)];
    });
  };

  const handleRemove = async (slotNumber: string) => {
    // TODO: deal with removing the correct data from members object

    console.log("removing slotNumber", slotNumber);

    unregister([
      `memberAddress-${slotNumber}`,
      `voting-${slotNumber}`,
      `nonVoting-${slotNumber}`,
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
              id={`memberAddress-${slotNumber}`}
              placeholder="0x666..."
              rules={{ validate: ValidateField.ethAddress, required: true }}
            />
            <WrappedInput
              {...props}
              label="Voting"
              id={`voting-${slotNumber}`}
              rules={{ validate: ValidateField.number, required: true }}
              defaultValue="0"
            />
            <WrappedInput
              {...props}
              label="Non-Voting"
              id={`nonVoting-${slotNumber}`}
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
