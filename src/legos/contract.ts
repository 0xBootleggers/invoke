import { LOCAL_ABI } from "@daohaus/abis";
import { ContractLego } from "@daohaus/utils";
import { CONTRACT_KEYCHAINS } from "@daohaus/keychain-utils";

export const APP_CONTRACT: Record<string, ContractLego> = {
  V3_FACTORY_ADV_TOKEN: {
    type: "static",
    contractName: "V3_FACTORY_ADV_TOKEN",
    targetAddress: CONTRACT_KEYCHAINS.V3_FACTORY_ADV_TOKEN,
    abi: LOCAL_ABI.BAAL_ADV_TOKEN_SUMMONER,
  },
};
