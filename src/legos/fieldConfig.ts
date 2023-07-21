import { MolochFields } from "@daohaus/moloch-v3-fields";
import { FieldLegoBase, FormLegoBase } from "@daohaus/utils";

import { SummonersField } from "../components/customFields/SummonersField";
import { WizardFormLegoBase } from "../formWizard";

export const AppFieldLookup = {
  ...MolochFields,
  summonersField: SummonersField,
};

export type CustomFieldLego = FieldLegoBase<typeof AppFieldLookup>;
export type CustomFormLego = FormLegoBase<typeof AppFieldLookup>;

export type CustomWizardFormLego = WizardFormLegoBase<typeof AppFieldLookup>;
