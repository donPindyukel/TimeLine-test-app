import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NewsViewComponent } from './components/news/news-view/news-view.component';
import { AddNewEventComponent } from './components/add-new-event/add-new-event.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { newsReducer } from './store/reducers/news.reducer';
import { transactionsReducer } from './store/reducers/financial.reducer';
import { EventTypeDirective } from './directives/event-type.directive';
import { SortingDataServiceService } from './services/sorting-data-service.service';
import { AddFinancialEventComponent } from './components/financial-event/add-financial-event/add-financial-event.component';
import { FinancialViewComponent } from './components/financial-event/financial-view/financial-view.component';
import { TransactionTypeDirective } from './directives/transaction-type.directive';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    NewsViewComponent,
    AddNewEventComponent,
    AddNewsComponent,
    NotFoundComponent,
    EventTypeDirective,
    AddFinancialEventComponent,
    FinancialViewComponent,
    TransactionTypeDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    AppRoutingModule,
    StoreModule.forRoot({newsReducer, transactionsReducer}),
  ],
  providers: [SortingDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
