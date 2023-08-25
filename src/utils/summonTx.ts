import { ArbitraryState } from '@daohaus/utils';
import { ValidNetwork } from '@daohaus/keychain-utils';
import { assembleTxArgs } from '@daohaus/contract-utils';

export const SUMMONER_FIELD_MEMBER = 'memberAddresses';
export const SUMMONER_FIELD_SHARES = 'memberShares';
export const SUMMONER_FIELD_LOOT = 'memberLoot';

const DEFAULT_ARGS = {
  votingPeriodInSeconds: '10800',
  gracePeriodInSeconds: '7200',
  newOffering: '0',
  quorum: '0',
  sponsorThreshold: '1000000000000000000',
  minRetention: '66',
  votingTransferable: false,
  nvTransferable: false,
};

type summonerFieldSet = Record<string, string>;

const assembleMembersData = (
  formValues: Record<string, unknown>
): Record<string, unknown> => {
  const membersObj = formValues.members as Record<string, summonerFieldSet>;

  const members = Object.keys(membersObj).reduce(
    (acc: Record<string, string[]>, val: string) => {
      acc[SUMMONER_FIELD_MEMBER] = [
        ...acc[SUMMONER_FIELD_MEMBER],
        membersObj[val][SUMMONER_FIELD_MEMBER],
      ];
      acc[SUMMONER_FIELD_SHARES] = [
        ...acc[SUMMONER_FIELD_SHARES],
        membersObj[val][SUMMONER_FIELD_SHARES],
      ];
      acc[SUMMONER_FIELD_LOOT] = [
        ...acc[SUMMONER_FIELD_LOOT],
        membersObj[val][SUMMONER_FIELD_LOOT],
      ];

      return acc;
    },
    {
      [SUMMONER_FIELD_MEMBER]: [],
      [SUMMONER_FIELD_SHARES]: [],
      [SUMMONER_FIELD_LOOT]: [],
    }
  );

  console.log('summoner membersObj', membersObj);
  console.log('summoners', members);

  return members;
};

export const assembleSummonArgs = (args: ArbitraryState) => {
  const formValues = args.appState.formValues as Record<string, unknown>;
  const chainId = args.chainId as ValidNetwork;

  const members = assembleMembersData(formValues);

  const txArgs = assembleTxArgs(
    { ...formValues, ...DEFAULT_ARGS, members },
    chainId
  );

  console.log('txArgs', txArgs);

  return txArgs;
};
