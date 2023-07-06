import { Dispatch, ReactNode, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

import { Button, H3, ParMd } from "@daohaus/ui";
import { useFormBuilder } from "@daohaus/form-builder-base";
import styled from "styled-components";

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 2rem;
`;

type ConfirmationProps = {
  customConfirm?: React.ElementType;
  formValues: FieldValues;
  setCurrentStepIndex: Dispatch<SetStateAction<number>>;
  currentStepIndex: number;
  handleSubmit: () => any | Promise<any>;
  title?: string;
  description?: string;
  submitButtonText?: string;
  isLoading: boolean;
};

export const Confirmation = ({
  customConfirm,
  formValues,
  setCurrentStepIndex,
  currentStepIndex,
  handleSubmit,
  title,
  description,
  submitButtonText,
  isLoading = false,
}: ConfirmationProps) => {
  const { submitDisabled } = useFormBuilder() || {};

  const CustomConfirm = customConfirm as React.ElementType;

  return (
    <>
      {customConfirm && <CustomConfirm formValues={formValues} />}

      {!customConfirm && (
        <>
          {title || <H3>Confirm</H3>}
          {description && <ParMd>{description}</ParMd>}
          <div>{JSON.stringify(formValues)}</div>
        </>
      )}

      <ButtonRow>
        <Button
          onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
          disabled={submitDisabled || isLoading}
        >
          Previous
        </Button>
        <Button onClick={handleSubmit} disabled={submitDisabled || isLoading}>
          {submitButtonText || "Deploy"}
        </Button>
      </ButtonRow>
    </>
  );
};
