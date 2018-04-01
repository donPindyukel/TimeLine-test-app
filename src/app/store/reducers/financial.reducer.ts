import * as transactions from '../actions/financial.actions';
import { Transaction } from '../../models/fin-event';

export interface State {
  transactions: Transaction[];
}
export const initialState: State = {
  transactions: []
};

export function transactionsReducer(state = initialState, action: transactions.Actions): State {
  switch (action.type) {
    case transactions.ADD_TRANSACTION_EVENT: {
      state.transactions.push(action.payload);
      return { ...state };
    }
    case transactions.REMOVE_TRANSACTION_EVENT: {
      const newArr = state.transactions.filter(item => item.id !== action.payload);
      return {...state, transactions: [...newArr] };
    }
    default: {
      return state;
    }
  }
}

export const getTransactions = (state) => state.transactionsReducer.transactions;
