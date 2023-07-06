import { useNavigate } from "react-router-dom";
import { FormLayout } from "@daohaus/ui";

import { WizardFormBuilder } from "../formWizard";
import { AppFieldLookup } from "../legos/fieldConfig";
import { WIZARD_FORM } from "../legos/forms";

export const Spike = () => {
  const navigate = useNavigate();
  // new member fields

  // refine other fields

  // todo when moving to sdk
  // //  cans some stuff be moved out of here and form builder?
  // // // corefield lookup and/or field components?

  const onFormComplete = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result: any
  ) => {
    const daoAddress = result?.data?.transaction?.daoAddress;
    navigate(`/success/${daoAddress}`);
  };

  return (
    <FormLayout>
      <WizardFormBuilder
        form={WIZARD_FORM.INVOKE}
        customFields={AppFieldLookup}
        targetNetwork={import.meta.env.VITE_TARGET_CHAIN}
        defaultValues={{ votingTokenName: "boots" }}
        lifeCycleFns={{
          onPollSuccess: (result) => {
            onFormComplete(result);
          },
        }}
        // customConfirm={() => {
        //   return <p>poooooo</p>;
        // }}
      />
    </FormLayout>
  );
};
