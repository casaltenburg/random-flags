import { gql } from "@apollo/client";

export const GET_COUNTRIESFLAGS = gql`
  {
    countries {
      name
      emoji
    }
  }
`;
