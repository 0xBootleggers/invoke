import { ValidNetwork } from '@daohaus/keychain-utils';

export const TARGET_DAO: {
  [key: string]: {
    ADDRESS: string;
    SAFE_ADDRESS: string;
    CHAIN_ID: ValidNetwork;
  };
} = {
  '0xe2f816d08c568a447d3804b265f1e277bc2c688d': {
    ADDRESS: '0xe2f816d08c568a447d3804b265f1e277bc2c688d',
    SAFE_ADDRESS: '0x44325ffce4f99b5cc87c0f29cb3e7ac0f8d77a82',
    CHAIN_ID: '0x64',
  },
};
