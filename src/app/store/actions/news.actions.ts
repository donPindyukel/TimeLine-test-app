import { Action } from '@ngrx/store';
import { News } from '../../models/news';

export const ADD_NEWS_EVENT = '[NEWS] Add news event';
export const REMOVE_NEWS_EVENT = '[NEWS] Remove news event';
export const READ_NEWS_EVENT = '[NEWS] Read news event';

export class AddNewsEventAction implements Action {
  readonly type = ADD_NEWS_EVENT;
  constructor(public payload: News) { }
}

export class RemoveNewsEventAction implements Action {
  readonly type = REMOVE_NEWS_EVENT;
  constructor(public payload: string) { }
}

export class ReadNewsEventAction implements Action {
  readonly type = READ_NEWS_EVENT;
  constructor(public payload: string) { }
}

export type Actions
  = AddNewsEventAction
  | RemoveNewsEventAction
  | ReadNewsEventAction;
