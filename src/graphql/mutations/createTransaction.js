import { gql } from "@apollo/client";

const CREATE_TRANSACTION = gql`
  mutation createTransaction(
    $description: String!,
    $paymentMethod: PaymentMethod!,
    $category: String!,
    $amount: Float!,
    $date: String!,
    $location: String,
  ) {
    createTransaction(
      transactionInput: {
        description: $description,
        paymentMethod: $paymentMethod,
        category: $category,
        amount: $amount,
        date: $date,
        location: $location
      }
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

export default CREATE_TRANSACTION;
