import { gql } from "@apollo/client";

const DELETE_TRANSACTION = gql`
  mutation deleteTransaction(
    $id: ID!
  ) {
    deleteTransaction(
    id: $id
    ) {
      id
      userId
      description
      paymentMethod
      category
      amount
      location
      date
    }
  }
`;

export default DELETE_TRANSACTION;
