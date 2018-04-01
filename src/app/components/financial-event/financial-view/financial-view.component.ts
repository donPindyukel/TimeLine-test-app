import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transaction } from '../../../models/fin-event';

@Component({
  selector: 'app-financial-view',
  templateUrl: './financial-view.component.html',
  styleUrls: ['./financial-view.component.scss']
})
export class FinancialViewComponent implements OnInit {
  @Input() transactionData: Transaction;
  isShowDescription = false;
  @Output() removeTransaction: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClickDelete() {
    this.removeTransaction.emit();
  }

}
