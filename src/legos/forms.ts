import { FIELD } from "@daohaus/moloch-v3-legos";
import { CustomFormLego, CustomWizardFormLego } from "./fieldConfig";
import { APP_FIELD } from "./fields";
import { APP_TX } from "./tx";

const PROPOSAL_SETTINGS_FIELDS = [FIELD.PROPOSAL_EXPIRY, FIELD.PROP_OFFERING];

export const APP_FORM: Record<string, CustomFormLego> = {
  SIGNAL: {
    id: "SIGNAL",
    title: "Signal Form",
    subtitle: "Signal Proposal",
    description: "Ratify on-chain using a DAO proposal.",
    requiredFields: { title: true, description: true },
    log: true,
    tx: APP_TX.POST_SIGNAL,
    fields: [
      FIELD.TITLE,
      FIELD.DESCRIPTION,
      FIELD.LINK,
      APP_FIELD.TEST_FIELD,
      ...PROPOSAL_SETTINGS_FIELDS,
    ],
  },
  NAME: {
    id: "NAME",
    title: "Signal Form",
    subtitle: "Signal Proposal",
    description: "Ratify on-chain using a DAO proposal.",
    requiredFields: { name: true },
    log: true,
    fields: [{ ...FIELD.TITLE, id: "name", label: "Name" }],
  },
};

export const WIZARD_FORM: Record<string, CustomWizardFormLego> = {
  INVOKE: {
    id: "INVOKE",
    tx: APP_TX.INVOKE,
    log: true,
    submitButtonText: "Deploy",
    steps: [
      {
        title: "Summon",
        description:
          "You are about to summon a Moloch DAO, an on-chain organization with a native token and voting mechanism. To get started, pick a name for your DAO.  ",
        fields: [
          {
            type: "input",
            id: "daoName",
            label: "DAO",
            placeholder: "Name of Your DAO",
          },
        ],
        requiredFields: { daoName: true },
      },
      {
        title: "Token",
        description:
          "Choose the name for your voting and non-voting tokens. Your token is the identity of your DAO. The token created will be ERC20 compliant.",
        fields: [
          {
            id: "voting",
            type: "splitColumn",
            rows: [
              {
                rowId: "row1",
                left: {
                  id: "tokenName",
                  type: "input",
                  label: "Voting Token Name",
                  placeholder: "Token Name",
                },
                right: {
                  id: "tokenSymbol",
                  type: "input",
                  label: "Voting Token Symbol",
                  placeholder: "vTKN",
                },
              },
            ],
          },
          {
            id: "nonvoting",
            type: "splitColumn",
            rows: [
              {
                rowId: "row1",
                left: {
                  id: "lootTokenName",
                  type: "input",
                  label: "Non-Voting Token Name",
                  placeholder: "Token Name",
                },
                right: {
                  id: "lootTokenSymbol",
                  type: "input",
                  label: "Non-Voting Token Symbol",
                  placeholder: "nvTKN",
                },
              },
            ],
          },
        ],
        requiredFields: {
          tokenName: true,
          tokenSymbol: true,
          lootTokenName: true,
          lootTokenSymbol: true,
        },
      },
    ],
  },
};
