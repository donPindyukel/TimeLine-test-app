import { Injectable } from '@angular/core';
import { Transaction } from '../models/fin-event';
import { News } from '../models/news';

@Injectable()
export class SortingDataServiceService {

  constructor() {  }

  sortEventsByDate(param: string, events: Array<News | Transaction>) {
    if (param === 'ASC') {
      events.sort((a, b) => {
        if (a.date < b.date) { return -1; }
        if (a.date > b.date) { return 1; }
        return 0;
      });
    } else if (param === 'DESC') {
      events.sort((a, b) => {
        if (a.date > b.date) { return -1; }
        if (a.date < b.date) { return 1; }
        return 0;
      });
    }
  }

  sortEventsByType(param: string, events: Array<News | Transaction>) {
    if (param === 'transaction') {
      events.sort((a, b) => {
        if (a.type === 'transaction' && b.type === 'news') { return -1; }
        if (a.type === 'news' && b.type === 'transaction') { return 1; }
        return 0;
      });
    } else if (param === 'news') {
      events.sort((a, b) => {
        if (a.type === 'news' && b.type === 'transaction') { return -1; }
        if (a.type === 'transaction' && b.type === 'news') { return 1; }
        return 0;
      });
    }
  }

}
