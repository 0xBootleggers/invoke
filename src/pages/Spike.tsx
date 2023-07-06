import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import { FormLayout, useToast } from "@daohaus/ui";
import { ArbitraryState } from "@daohaus/utils";

import { WizardFormBuilder } from "../formWizard";
import { AppFieldLookup } from "../legos/fieldConfig";
import { APP_FORM, WIZARD_FORM } from "../legos/forms";

export const Spike = () => {
  const navigate = useNavigate();
  const { errorToast, successToast } = useToast();

  // confirmation page

  // success page

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
    const txHash = result?.data?.transaction?.hash;
    navigate(`/success/${daoAddress}&tx=${txHash}`);
  };

  return (
    <FormLayout
    // title="Name Your DAO"
    // description="You are about to create a Moloch DAO, an on-chain organization with native token and voting mechanism. To get started, pick a name for your DAO."
    >
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
