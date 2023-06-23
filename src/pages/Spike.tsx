import { FieldValues } from "react-hook-form";
import { FormBuilder } from "@daohaus/form-builder";
import { FormLayout } from "@daohaus/ui";

import { AppFieldLookup } from "../legos/fieldConfig";
import { APP_FORM } from "../legos/forms";
import { useState } from "react";

console.log("APP_FORM", APP_FORM);

export const Spike = () => {
  // todo: separate into a hook to store step + all form data
  // todo: fork formbuilder so we can adjust the button styles and add a previous button
  const [step, setStep] = useState<number>(1);

  const handleSubmit = (formValues: FieldValues) => {
    console.log("poopin", formValues);
    setStep(step + 1);
  };

  if (step === 2) {
    return (
      <FormLayout
        title="Configure Token Settings"
        description="Choose the name and symbol for your voting and non-voting tokens. Your token is the identity of your organization. The tokens created are ERC-20 compliant."
      >
        <FormBuilder
          form={APP_FORM.NAME}
          customFields={AppFieldLookup}
          onSubmit={handleSubmit}
          targetNetwork={import.meta.env.VITE_TARGET_CHAIN}
          submitButtonText="Next"
        />
      </FormLayout>
    );
  }

  return (
    <FormLayout
      title="Name Your DAO"
      description="You are about to create a Moloch DAO, an on-chain organization with native token and voting mechanism. To get started, pick a name for your DAO."
    >
      <FormBuilder
        form={APP_FORM.NAME}
        // defaultValues={defaults}
        customFields={AppFieldLookup}
        onSubmit={handleSubmit}
        targetNetwork={import.meta.env.VITE_TARGET_CHAIN}
        submitButtonText="Next"
      />
    </FormLayout>
  );
};
