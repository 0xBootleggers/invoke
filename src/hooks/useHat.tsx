// useRequest.js
import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";
import { DEFAULT_GRAPH_URL, HATS_GRAPH_URL } from "../utils/constants";

import { TARGET_DAO } from "../targetDao";
import { HATS_FOR_TOP_HAT } from "./queries";

const API_URL =
  HATS_GRAPH_URL[TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID];

const graphQLClient = new GraphQLClient(API_URL || DEFAULT_GRAPH_URL);

export const useHat = ({ hatId }: { hatId?: string }) => {
  const { data, ...rest } = useQuery(
    ["get-nft-list", { hatId }],
    () =>
      graphQLClient.request(HATS_FOR_TOP_HAT, {
        id: hatId?.toLowerCase(),
      }),
    { enabled: !!hatId }
  );

  console.log("data", hatId, data);

  return {
    hat: data?.hat,
    ...rest,
  };
};
