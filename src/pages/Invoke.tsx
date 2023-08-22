import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { WizardFormBuilder } from "../formWizard";
import { AppFieldLookup } from "../legos/fieldConfig";
import { WIZARD_FORM } from "../legos/forms";
import { InvokeContainer } from "../components/Layout";
import { InvokeConfirmation } from "../components/InvokeConfirmation";

export const Invoke = () => {
  const navigate = useNavigate();

  const onFormComplete = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result: any
  ) => {
    const daoAddress = result?.data?.transaction?.daoAddress;
    navigate(`/success/${daoAddress}`);
  };

  return (
    <InvokeContainer>
      <WizardFormBuilder
        form={WIZARD_FORM.INVOKE}
        customFields={AppFieldLookup}
        targetNetwork={import.meta.env.VITE_TARGET_CHAIN}
        lifeCycleFns={{
          onPollSuccess: (result) => {
            onFormComplete(result);
          },
        }}
        customConfirm={InvokeConfirmation}
      />
    </InvokeContainer>
  );
};
