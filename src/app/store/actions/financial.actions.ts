import { Action } from '@ngrx/store';
import { Transaction } from '../../models/fin-event';

export const ADD_TRANSACTION_EVENT = '[TRANSACTIONS] Add transaction event';
export const REMOVE_TRANSACTION_EVENT = '[TRANSACTIONS] Remove transaction event';

export class AddTransactionEventAction implements Action {
  readonly type = ADD_TRANSACTION_EVENT;
  constructor(public payload: Transaction) { }
}

export class RemoveTransactionEventAction implements Action {
  readonly type = REMOVE_TRANSACTION_EVENT;
  constructor(public payload: string) { }
}

export type Actions
  = AddTransactionEventAction
  | RemoveTransactionEventAction;
