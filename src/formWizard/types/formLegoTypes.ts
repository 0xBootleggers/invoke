import {
  FieldLegoBase,
  FormLegoBase,
  LookupType,
  TXLego,
} from "@daohaus/utils";
import { CoreFieldLookup } from "../components/CoreFieldLookup";

import { JSXElementConstructor } from "react";
import { RegisterOptions } from "react-hook-form";

export type CoreFields = typeof CoreFieldLookup;

export type FieldLego<Lookup extends LookupType = CoreFields> =
  FieldLegoBase<Lookup>;
export type FormLego<Lookup extends LookupType = CoreFields> =
  FormLegoBase<Lookup>;

// new

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

export declare type WizardFormLegoBase<Lookup extends LookupType = LookupType> =
  {
    id: string;
    title?: string;
    subtitle?: string;
    description?: string;
    confirmTitle?: string;
    confirmDescription?: string;
    steps: {
      title?: string;
      description?: string;
      fields: FieldLegoBase<Lookup>[];
      requiredFields?: Record<string, boolean>;
    }[];
    tx?: TXLego;
    log?: boolean;
    devtool?: boolean;
    submitButtonText?: string;
  };
