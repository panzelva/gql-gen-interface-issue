import gql from "graphql-tag";

const query = gql`
  query GetBooks {
    schoolBooks {
      title
      ... on TextBook {
        classes
      }
      ... on ColoringBook {
        colors
      }
    }
  }
`;
