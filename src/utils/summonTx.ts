import { ArbitraryState } from "@daohaus/utils";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { assembleTxArgs } from "@daohaus/contract-utils";

const DEFAULT_ARGS = {
  votingPeriodInSeconds: "120",
  gracePeriodInSeconds: "60",
  newOffering: "0",
  quorum: "0",
  sponsorThreshold: "1000000000000000000",
  minRetention: "66",
  votingTransferable: false,
  nvTransferable: false,

  members: {
    memberAddresses: ["0x83aB8e31df35AA3281d630529C6F4bf5AC7f7aBF"],
    memberShares: ["10"],
    memberLoot: ["1"],
  },
};

export const assembleSummonArgs = (args: ArbitraryState) => {
  const formValues = args.appState.formValues as Record<string, unknown>;
  const chainId = args.chainId as ValidNetwork;
  const txArgs = assembleTxArgs({ ...formValues, ...DEFAULT_ARGS }, chainId);

  console.log("txArgs", txArgs);

  return txArgs;
};
