import gql from 'graphql-tag';

const USERS_QUERY = gql`
  query Users {
    allUsers {
      id
      name
    }
  }
`;

export default USERS_QUERY;