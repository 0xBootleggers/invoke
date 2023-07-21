import React, { useState } from "react";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

import { RegisterOptions, useFormContext } from "react-hook-form";

import { Buildable, WrappedInput, Field, Input, Button } from "@daohaus/ui";

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
  // transform shares and loot fields into wei
  // validate is number
  // validate address fields
  // when put into final format?
  // members: {
  //   memberAddresses: ["0x83aB8e31df35AA3281d630529C6F4bf5AC7f7aBF"],
  //   memberShares: ["10"],
  //   memberLoot: ["1"],
  // },

  const { watch, getValues, setValue, register } = useFormContext();

  const [rows, setRows] = useState<number>(1);
  // const multipleSharesField = watch("addressesAndAmounts");

  const newRules: RegisterOptions = {
    ...props.rules,
    // setValueAs: transformAddressesAndAmountsData,
    // validate: validateAddressesAndAmountsData,
  };

  const handleAdd = () => {
    setRows(rows + 1);
  };

  const handleRemove = (slotNumber: number) => {
    // TODO: deal with removing the correct data from members object

    console.log("removing slotNumber", slotNumber);
    setRows(rows - 1);
  };

  return (
    <>
      {[...Array(rows).keys()].map((slotNumber: number) => {
        return (
          <RowWrapper key={slotNumber}>
            <WrappedInput
              {...props}
              label="Member"
              id={`memberAddress-${slotNumber}`}
            />
            <WrappedInput
              {...props}
              label="Voting"
              id={`voting-${slotNumber}`}
            />
            <WrappedInput
              {...props}
              label="Non-Voting"
              id={`nonVoting-${slotNumber}`}
            />
            {slotNumber > 0 && (
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
