import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";
import styled from "styled-components";

import { Button, DataMd, H3, ParLg } from "@daohaus/ui";
import { useFormBuilder } from "@daohaus/form-builder-base";
import { WizardFormLego } from "../types";

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 2rem;
`;

const DataRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 2rem 0 2rem;
`;

const ConfirmTitle = styled.div`
  margin-bottom: 3rem;
`;

type ConfirmationProps = {
  formValues: FieldValues;
  setCurrentStepIndex: Dispatch<SetStateAction<number>>;
  currentStepIndex: number;
  handleSubmit: () => any | Promise<any>;
  isLoading: boolean;
  form: WizardFormLego;
  customConfirm?: React.ElementType;
};

export const Confirmation = ({
  formValues,
  setCurrentStepIndex,
  currentStepIndex,
  handleSubmit,
  isLoading = false,
  form,
  customConfirm,
}: ConfirmationProps) => {
  const { submitDisabled } = useFormBuilder() || {};

  const { confirmTitle, confirmDescription, submitButtonText } = form;

  const CustomConfirm = customConfirm as React.ElementType;

  return (
    <>
      <>
        {
          <ConfirmTitle>
            {confirmTitle && <H3>{confirmTitle}</H3>}
            {!confirmTitle && <H3>Confirm</H3>}
          </ConfirmTitle>
        }
        {confirmDescription && <DataMd>{confirmDescription}</DataMd>}
        {!confirmDescription && (
          <DataMd>
            Look though the previous steps to review your inputs before
            submitting.
          </DataMd>
        )}
      </>

      {customConfirm && <CustomConfirm formValues={formValues} form={form} />}

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
