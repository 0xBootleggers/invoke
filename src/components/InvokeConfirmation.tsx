import { FieldValues } from "react-hook-form";
import styled from "styled-components";

import { DataMd } from "@daohaus/ui";
import { Collapser, WizardFormLego } from "../formWizard";
import { CustomWizardFormLego } from "../legos/fieldConfig";

const DataRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 2rem 0 2rem;
`;

const getConfirmationData = ({
  step,
  formValues,
}: {
  step: CustomWizardFormLego["steps"][0];
  formValues: FieldValues;
}) => {
  if (step.id === "stepOne") {
    return (
      <DataRow>
        <DataMd>{step.fields[0].label}</DataMd>
        <DataMd>{formValues[step.fields[0].id]}</DataMd>
      </DataRow>
    );
  }

  if (step.id === "stepTwo") {
    return (
      <>
        <DataRow>
          <DataMd>Voting Token</DataMd>
          <DataMd>
            {`${formValues["tokenName"]} / ${formValues["tokenSymbol"]}`}
          </DataMd>
        </DataRow>
        <DataRow>
          <DataMd>Non-Voting Token</DataMd>
          <DataMd>
            {`${formValues["lootTokenName"]} / ${formValues["lootTokenSymbol"]}`}
          </DataMd>
        </DataRow>
      </>
    );
  }

  if (step.id === "stepThree") {
    return Object.keys(formValues.members).map((memberKey) => {
      return (
        <DataRow key={memberKey}>
          <DataMd>{formValues.members[memberKey].memberAddresses}</DataMd>
          <DataMd>{`${formValues.members[memberKey].memberShares} ${formValues["tokenSymbol"]} / ${formValues.members[memberKey].memberLoot} ${formValues["lootTokenSymbol"]}`}</DataMd>
        </DataRow>
      );
    });
  }

  return null;
};

type CustomConfirmationProps = {
  formValues: FieldValues;
  form: WizardFormLego;
};

export const InvokeConfirmation = ({
  formValues,
  form,
}: CustomConfirmationProps) => {
  return (
    <>
      {form.steps.map((step: any) => {
        return (
          <Collapser
            title={step.title}
            content={getConfirmationData({ step, formValues })}
            key={step.title}
          />
        );
      })}
    </>
  );
};
