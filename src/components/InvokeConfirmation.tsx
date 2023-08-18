import { FieldValues } from "react-hook-form";
import styled from "styled-components";

import { DataMd } from "@daohaus/ui";
import { Collapser, WizardFormLego } from "../formWizard";

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
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <DataRow>
      <DataMd>{label}</DataMd>
      <DataMd>{value}</DataMd>
    </DataRow>
  );
};

type CustomConfirmationProps = {
  formValues: FieldValues;
  form: WizardFormLego;
};

export const InvokeConfirmation = ({
  formValues,
  form,
}: CustomConfirmationProps) => {
  console.log("form", form);
  console.log("formValues", formValues);

  // sleep on this
  // line 78 map migh be off and we jsut extract and display instead of trying to loop so much

  return (
    <>
      {form.steps.map((step: any) => {
        return (
          <Collapser
            title={step.title}
            content={<p>poopin</p>}
            key={step.title}
          />
        );
      })}
    </>
  );
};

const NameStep = ({
  step,
  formValues,
}: {
  step: WizardFormLego["steps"][0];
  formValues: FieldValues;
}) => {
  return (
    <>
      {step.fields.map((field: WizardFormLego["steps"][0]["fields"][0]) => {
        return (
          <DataRow key={field.id}>
            <DataMd>{field.label}</DataMd>
            <DataMd>{formValues[field.id]}</DataMd>
          </DataRow>
        );
      })}
    </>
  );
};
