import { ReactNode, useState } from "react";
import { FieldValues } from "react-hook-form";

import { TXLifeCycleFns, useTxBuilder } from "@daohaus/tx-builder";
import { FormBuilderBase, FormLego } from "@daohaus/form-builder-base";
import { Button, FormLayout, H1, H3, ParMd, useToast } from "@daohaus/ui";
import { useDHConnect } from "@daohaus/connect";
import { handleErrorMessage, LookupType } from "@daohaus/utils";

import { CoreFieldLookup, WizardFormLego } from ".";
import { FormFooter } from "./components/FormFooter";
import { Confirmation } from "./components/Confirmation";

type BuilderProps = {
  form: WizardFormLego;
  defaultValues?: FieldValues;
  customFields?: LookupType;
  lifeCycleFns?: TXLifeCycleFns;
  targetNetwork?: string;
  onSubmit?: (
    formValues: FieldValues
  ) => void | Promise<(formValues: FieldValues) => void>;
  customConfirm?: React.ElementType;
};

export enum StatusMsg {
  Compile = "Compiling Transaction Data",
  Request = "Requesting Signature",
  Await = "Transaction Submitted",
  TxErr = "Transaction Error",
  TxSuccess = "Transaction Success",
  PollStart = "Syncing TX (Subgraph)",
  PollSuccess = "Success: TX Confirmed!",
  PollError = "Sync Error (Subgraph)",
  NoContext = "Missing TXBuilder Context",
}

export const WizardFormBuilder = ({
  form,
  defaultValues,
  customFields = CoreFieldLookup,
  targetNetwork,
  lifeCycleFns,
  onSubmit,
  customConfirm,
}: BuilderProps) => {
  const { chainId } = useDHConnect();
  const { fireTransaction } = useTxBuilder();
  const { defaultToast, errorToast, successToast } = useToast();
  const { title, description, subtitle } = form;

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<null | StatusMsg>(null);
  const [txHash, setTxHash] = useState<null | string>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [confirmationData, setConfirmationData] =
    useState<null | FieldValues>();

  const isSameNetwork = targetNetwork ? targetNetwork === chainId : true;
  const submitDisabled = isLoading || !isSameNetwork;

  const handleConfirm = (formValues: FieldValues) => {
    console.log("CONFIRM STEP", formValues);
    setConfirmationData(formValues);
    setCurrentStepIndex(currentStepIndex + 1);

    // then need to do this on a real submit
  };

  const handleSubmitButton = () => {
    if (!confirmationData) return;
    handleSubmit(confirmationData);
  };

  console.log("isLoading", isLoading);

  const handleSubmit = async (formValues: FieldValues) => {
    if (form.tx) {
      setIsLoading(true);
      setTxHash(null);
      setStatus(StatusMsg.Compile);
      const executed = await fireTransaction({
        tx: form.tx,
        callerState: {
          formValues,
        },
        lifeCycleFns: {
          onRequestSign() {
            setStatus(StatusMsg.Request);
            lifeCycleFns?.onRequestSign?.();
          },
          onTxHash(txHash) {
            setTxHash(txHash);
            setStatus(StatusMsg.Await);
            lifeCycleFns?.onTxHash?.(txHash);
          },
          onTxError(error) {
            setStatus(StatusMsg.TxErr);
            const errMsg = handleErrorMessage({
              error,
              fallback: "Could not decode error message",
            });

            setIsLoading(false);
            lifeCycleFns?.onTxError?.(error);
            errorToast({ title: StatusMsg.TxErr, description: errMsg });
          },
          onTxSuccess(...args) {
            setStatus(
              form.tx?.disablePoll ? StatusMsg.PollSuccess : StatusMsg.TxSuccess
            );
            lifeCycleFns?.onTxSuccess?.(...args);
            defaultToast({
              title: StatusMsg.TxSuccess,
              description: form.tx?.disablePoll
                ? "Transaction cycle complete."
                : "Please wait for subgraph to sync",
            });
          },
          onPollStart() {
            setStatus(StatusMsg.PollStart);
            lifeCycleFns?.onPollStart?.();
          },
          onPollError(error) {
            setStatus(StatusMsg.PollError);
            const errMsg = handleErrorMessage({
              error,
              fallback: "Could not decode poll error message",
            });
            setIsLoading(false);
            lifeCycleFns?.onPollError?.(error);
            errorToast({ title: StatusMsg.PollError, description: errMsg });
          },
          onPollSuccess(...args) {
            setStatus(StatusMsg.PollSuccess);
            setIsLoading(false);
            successToast({
              title: StatusMsg.PollSuccess,
              description: "Transaction cycle complete.",
            });
            lifeCycleFns?.onPollSuccess?.(...args);
          },
        },
      });
      if (executed === undefined) {
        setStatus(StatusMsg.NoContext);
        return;
      }
      return executed;
    }
    if (onSubmit) {
      return await onSubmit?.(formValues);
    }
    console.error("FormBuilder: onSubmit not implemented");
  };

  const currentStep = form.steps[currentStepIndex];

  return (
    <FormLayout title={title} description={description} subtitle={subtitle}>
      {currentStepIndex < form.steps.length && (
        <>
          {currentStep.title && (
            <H3 style={{ marginBottom: "2rem" }}>{currentStep.title}</H3>
          )}
          {currentStep.description && (
            <ParMd style={{ marginBottom: "2rem" }}>
              {currentStep.description}
            </ParMd>
          )}
          <FormBuilderBase
            form={{
              ...form,
              fields: currentStep.fields,
              requiredFields: currentStep.requiredFields,
            }}
            fieldObj={customFields}
            defaultValues={{ ...defaultValues, ...confirmationData }}
            fieldSpacing="3.6rem"
            applyToEach={{ full: true }}
            formDisabled={isLoading}
            submitDisabled={submitDisabled}
            onSubmit={handleConfirm}
            footer={
              <FormFooter
                status={status}
                txHash={txHash}
                setCurrentStepIndex={setCurrentStepIndex}
                currentStepIndex={currentStepIndex}
                stepCount={form.steps.length}
              />
            }
          />
        </>
      )}

      {currentStepIndex === form.steps.length && confirmationData && (
        <Confirmation
          formValues={confirmationData}
          setCurrentStepIndex={setCurrentStepIndex}
          currentStepIndex={currentStepIndex}
          customConfirm={customConfirm}
          handleSubmit={handleSubmitButton}
          submitButtonText={form.submitButtonText}
          title={form.confirmTitle}
          description={form.confirmDescription}
          isLoading={isLoading}
        />
      )}
    </FormLayout>
  );
};
