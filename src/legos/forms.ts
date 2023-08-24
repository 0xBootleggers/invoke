import { FIELD } from '@daohaus/moloch-v3-legos';
import { CustomFormLego, CustomWizardFormLego } from './fieldConfig';
import { APP_FIELD } from './fields';
import { APP_TX } from './tx';

const PROPOSAL_SETTINGS_FIELDS = [FIELD.PROPOSAL_EXPIRY, FIELD.PROP_OFFERING];

export const APP_FORM: Record<string, CustomFormLego> = {
  SIGNAL: {
    id: 'SIGNAL',
    title: 'Signal Form',
    subtitle: 'Signal Proposal',
    description: 'Ratify on-chain using a DAO proposal.',
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
    id: 'NAME',
    title: 'Signal Form',
    subtitle: 'Signal Proposal',
    description: 'Ratify on-chain using a DAO proposal.',
    requiredFields: { name: true },
    log: true,
    fields: [{ ...FIELD.TITLE, id: 'name', label: 'Name' }],
  },
};

export const WIZARD_FORM: Record<string, CustomWizardFormLego> = {
  INVOKE: {
    id: 'INVOKE',
    tx: APP_TX.INVOKE,
    log: true,
    submitButtonText: 'Deploy',
    confirmTitle: 'Review DAO Contract',
    confirmDescription:
      'These settings cannot be changed once on-chain. Governance settings are updatable through proposals after summoning.',
    steps: [
      {
        id: 'stepOne',
        title: 'Name Your DAO',
        description:
          'You are summoning a Moloch DAO. Enter a name for your on-chain organization.  ',
        fields: [
          {
            type: 'input',
            id: 'daoName',
            label: 'DAO',
            placeholder: 'Name',
            rules: {
              maxLength: {
                value: 128,
                message: 'DAO name must be 128 characters or less',
              },
            },
          },
        ],
        requiredFields: { daoName: true },
      },
      {
        id: 'stepTwo',
        title: 'Configure Token Settings',
        description:
          'Choose the name and symbol for your ERC-20 voting and non-voting tokens.',
        fields: [
          {
            id: 'votingSegment',
            type: 'formSegment',
            title: 'Voting Token',
            showDivider: false,
            fields: [
              {
                id: 'voting',
                type: 'splitColumn',
                rows: [
                  {
                    rowId: 'row1',
                    left: {
                      id: 'tokenName',
                      type: 'input',
                      label: 'Name',
                      placeholder: 'Token Name',
                      rules: {
                        maxLength: {
                          value: 50,
                          message:
                            'Token name cannot be longer than 50 characters',
                        },
                      },
                    },
                    right: {
                      id: 'tokenSymbol',
                      type: 'input',
                      label: 'Symbol',
                      placeholder: 'vTKN',
                      rules: {
                        maxLength: {
                          value: 5,
                          message:
                            'Token symbol cannot be longer than 5 characters',
                        },
                      },
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 'noVotingSegment',
            type: 'formSegment',
            title: 'Non-Voting Token',
            showDivider: false,
            fields: [
              {
                id: 'nonvoting',
                type: 'splitColumn',
                rows: [
                  {
                    rowId: 'row1',
                    left: {
                      id: 'lootTokenName',
                      type: 'input',
                      label: 'Name',
                      placeholder: 'Token Name',
                      rules: {
                        maxLength: {
                          value: 50,
                          message:
                            'Token name cannot be longer than 50 characters',
                        },
                      },
                    },
                    right: {
                      id: 'lootTokenSymbol',
                      type: 'input',
                      label: 'Symbol',
                      placeholder: 'nvTKN',
                      rules: {
                        maxLength: {
                          value: 5,
                          message:
                            'Token symbol cannot be longer than 5 characters',
                        },
                      },
                    },
                  },
                ],
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
      {
        id: 'stepThree',
        title: 'List Starting Members',
        description:
          'Specify addresses and starting voting and non-voting token amounts.',
        fields: [
          {
            type: 'summonersField',
            id: 'members',
          },
        ],
      },
    ],
  },
};
