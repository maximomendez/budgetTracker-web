import { gql } from '@apollo/client';

const GET_TRANSACTIONS = gql`
  query getTransactions {
    getTransactions {
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
export default GET_TRANSACTIONS;