import { gql } from '@apollo/client';

const GET_AUTHENTICATED_USER = gql`
  query getUserAuthenticated {
    getUserAuthenticated {
      id
      name
      email
      password
    }
  }
`;
export default GET_AUTHENTICATED_USER;