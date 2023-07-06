import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";
import styled from "styled-components";

import { Button, H3, ParLg, ParMd } from "@daohaus/ui";
import { useFormBuilder } from "@daohaus/form-builder-base";

import { WizardFormLego } from "../types";
import { Collapser } from "./Collapser";

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

const ConfirmationSection = ({
  step,
  formValues,
}: {
  step: WizardFormLego["steps"][0];
  formValues: FieldValues;
}) => {
  // TODO: handle non strings (array for members)
  return (
    <>
      {step.fields.map((field: WizardFormLego["steps"][0]["fields"][0]) => {
        if (field.type === "checkRender") {
          // TODO: implement
          return null;
        }

        if (field.type === "splitColumn") {
          return field.rows.map((row: any) => {
            return (
              <>
                <DataRow key={row.left.id}>
                  <ParLg>{row.left.label}</ParLg>
                  <ParLg>{formValues[row.left.id]}</ParLg>
                </DataRow>
                <DataRow key={row.right.id}>
                  <ParLg>{row.right.label}</ParLg>
                  <ParLg>{formValues[row.right.id]}</ParLg>
                </DataRow>
              </>
            );
          });
        }

        return (
          <DataRow key={field.id}>
            <ParLg>{field.label}</ParLg>
            <ParLg>{formValues[field.id]}</ParLg>
          </DataRow>
        );
      })}
    </>
  );
};

type ConfirmationProps = {
  customConfirm?: React.ElementType;
  formValues: FieldValues;
  setCurrentStepIndex: Dispatch<SetStateAction<number>>;
  currentStepIndex: number;
  handleSubmit: () => any | Promise<any>;
  submitButtonText?: string;
  isLoading: boolean;
  form: WizardFormLego;
};

export const Confirmation = ({
  customConfirm,
  formValues,
  setCurrentStepIndex,
  currentStepIndex,
  handleSubmit,
  submitButtonText,
  isLoading = false,
  form,
}: ConfirmationProps) => {
  const { submitDisabled } = useFormBuilder() || {};

  const CustomConfirm = customConfirm as React.ElementType;

  return (
    <>
      {customConfirm && <CustomConfirm formValues={formValues} />}

      {!customConfirm && (
        <>
          {form.confirmTitle || <H3>Confirm</H3>}
          {form.confirmDescription && <ParMd>{form.confirmDescription}</ParMd>}
          {form.steps.map((step) => {
            return (
              <Collapser
                title={step.title}
                content={
                  <ConfirmationSection step={step} formValues={formValues} />
                }
                key={step.title}
              />
            );
          })}
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
