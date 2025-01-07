import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation login(
    $email: String!
    $password: String!
  ) {
    login(
      loginInput: {
        email: $email
        password: $password
      }
    ) {
      User {
        id
        name
        username
        password
        profilePicture
        gender
      }
      token
    }
  }
`;

export default LOGIN_USER;
