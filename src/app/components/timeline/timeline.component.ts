import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { News } from '../../models/news';
import { AutoUnsubscribe } from '../../shared/decorators/auto-unsubscribe.decorator';
import { getNews } from '../../store/reducers/news.reducer';
import * as newsActions from '../../store/actions/news.actions';
import { getTransactions } from '../../store/reducers/financial.reducer';
import * as transactionsActions from '../../store/actions/financial.actions';
import { SortingDataServiceService } from '../../services/sorting-data-service.service';
import { Transaction } from '../../models/fin-event';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
@AutoUnsubscribe()
export class TimelineComponent implements OnInit {
  events$: Observable<any>;
  eventsSubscr: Subscription;
  events: (News | Transaction)[];
  sort: string;
  sortType: string;
  type: string;
  constructor(
    private router: Router,
    private store: Store<News | Transaction>,
    private sortingService: SortingDataServiceService
    ) {

  }

  ngOnInit() {
    this.sort = 'ASC';
    this.sortType = '';
    this.events$ = Observable.combineLatest(
      this.store.select(getNews),
      this.store.select(getTransactions)
    ).map(data => [...data[0], ...data[1]]);
    this.eventsSubscr = this.events$.subscribe(res => {
      this.sortingService.sortEventsByDate(this.sort, res);
      this.events = [...res];
    });
  }

  addNewEvent() {
    this.router.navigate(['/add-new-event']);
  }

  onRemoveNews(id) {
    this.store.dispatch(new newsActions.RemoveNewsEventAction(id));
  }

  onRemoveTransaction(id) {
    this.store.dispatch(new transactionsActions.RemoveTransactionEventAction(id));
  }

  onReadedNews(id) {
    this.store.dispatch(new newsActions.ReadNewsEventAction(id));
  }

  changeSortDirection() {
    this.sortType = '';
    this.type = '';
    this.sort = (this.sort === 'ASC') ? 'DESC' : 'ASC';
    this.sortingService.sortEventsByDate(this.sort, this.events);
  }

  changeSortType() {
    this.sortType = (this.sortType === 'transaction') ? 'news' : 'transaction';
    this.type = (this.sortType === 'transaction') ? 'транзакции' : 'новости';
    this.sortingService.sortEventsByType(this.sortType, this.events);
  }

}
