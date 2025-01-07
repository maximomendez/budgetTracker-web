import { gql } from "@apollo/client";

const SIGN_UP_USER = gql`
  mutation signUp(
    $username: String!
    $name: String!
    $email: String!
    $password: String!
    $gender: Gender!
  ) {
    signUp(
      signUpInput: {
        username: $username
        name: $name
        email: $email
        password: $password
        gender: $gender
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

export default SIGN_UP_USER;
