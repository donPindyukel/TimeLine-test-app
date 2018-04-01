import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { News } from '../../models/news';
import * as newsActions from '../../store/actions/news.actions';
import * as transactionsActions from '../../store/actions/financial.actions';
import { Transaction } from '../../models/fin-event';


@Component({
  selector: 'app-add-new-event',
  templateUrl: './add-new-event.component.html',
  styleUrls: ['./add-new-event.component.scss']
})
export class AddNewEventComponent implements OnInit {
  inputEvent: string;
  constructor(private store: Store<any>) {
  }

  ngOnInit() {
  }

  onAddNews(news: News) {
    this.store.dispatch(new newsActions.AddNewsEventAction(news));
  }

  onAddTransaction(transaction: Transaction) {
    this.store.dispatch(new transactionsActions.AddTransactionEventAction(transaction));
  }

  onChangeVal(val) {
    this.inputEvent = val;
  }

}
