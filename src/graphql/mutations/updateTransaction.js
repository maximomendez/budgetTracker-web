import { gql } from "@apollo/client";

const UPDATE_TRANSACTION = gql`
  mutation updateTransaction(
    $id: ID!,
    $paymentMethod: PaymentMethod,
    $description: String,
    $category: String,
    $amount: Float,
    $date: String,
    $location: String,
  ) {
    updateTransaction(
      id: $id,
      transactionInput: {
        paymentMethod: $paymentMethod,
        description: $description,
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

export default UPDATE_TRANSACTION;
