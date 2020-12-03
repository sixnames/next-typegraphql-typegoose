import gql from 'graphql-tag';

export const INITIAL_SITE_QUERY = gql`
  query InitialSiteQuery {
    me {
      id
      email
      name
      secondName
      lastName
      phone
    }
  }
`;
