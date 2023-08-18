import { JSXElementConstructor } from "react";
import { RegisterOptions } from "react-hook-form";

import {
  FieldLegoBase,
  FormLegoBase,
  LookupType,
  TXLego,
} from "@daohaus/utils";

import { CoreFieldLookup } from "../components/CoreFieldLookup";

export type CoreFields = typeof CoreFieldLookup;

export type FieldLego<Lookup extends LookupType = CoreFields> =
  FieldLegoBase<Lookup>;
export type FormLego<Lookup extends LookupType = CoreFields> =
  FormLegoBase<Lookup>;

declare type FieldBase = Record<
  string,
  JSXElementConstructor<{
    id: string;
    disabled?: boolean;
    rules?: RegisterOptions;
    [property: string]: any;
  }>
>;
export declare type WizardFormLego = WizardFormLegoBase<FieldBase>;

export type WizardFormStep<Lookup extends LookupType = LookupType> = {
  title?: string;
  description?: string;
  fields: FieldLegoBase<Lookup>[];
  requiredFields?: Record<string, boolean>;
};

export declare type WizardFormLegoBase<Lookup extends LookupType = LookupType> =
  {
    id: string;
    title?: string;
    subtitle?: string;
    description?: string;
    confirmTitle?: string;
    confirmDescription?: string;
    steps: WizardFormStep<Lookup>[];
    tx?: TXLego;
    log?: boolean;
    devtool?: boolean;
    submitButtonText?: string;
  };
