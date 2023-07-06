import { MolochFields } from "@daohaus/moloch-v3-fields";
import { FieldLegoBase, FormLegoBase } from "@daohaus/utils";
import { TestField } from "../components/customFields/fieldTest";
import { WizardFormLegoBase, WizardFormStepLegoBase } from "../formWizard";

export const AppFieldLookup = {
  ...MolochFields,
  testField: TestField,
};

export type CustomFieldLego = FieldLegoBase<typeof AppFieldLookup>;
export type CustomFormLego = FormLegoBase<typeof AppFieldLookup>;

export type CustomWizardFormLego = WizardFormLegoBase<typeof AppFieldLookup>;
// export type CustomWizardFormFieldLego = WizardFormStepLegoBase<
//   typeof AppFieldLookup
// >;
