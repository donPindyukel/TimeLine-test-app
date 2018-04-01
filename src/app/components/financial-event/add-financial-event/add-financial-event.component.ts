import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DateValue } from '../../../models/date-value';
import { IMyDpOptions } from 'mydatepicker';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../../../models/fin-event';



@Component({
  selector: 'app-add-financial-event',
  templateUrl: './add-financial-event.component.html',
  styleUrls: ['./add-financial-event.component.scss']
})
export class AddFinancialEventComponent implements OnInit {

  myDatePickerOptions: IMyDpOptions;
  form: FormGroup;
  currentDate: DateValue;
  @Output() addTransaction: EventEmitter<Transaction> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    const date = new Date();
    this.currentDate = {
      date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()}
    };
    this.myDatePickerOptions = {
      dateFormat: 'dd.mm.yyyy',
      disableUntil: this.currentDate.date,
    };
    this.form = new FormGroup({
      amount: new FormControl(0, Validators.required),
      currency: new FormControl('USD', Validators.required),
      sender: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      typeTransaction: new FormControl('income', Validators.required),
      myDate: new FormControl (null, Validators.required)
    });
  }

  onSubmit() {
    this.router.navigate(['/']);
    this.addTransaction.emit({
      id: UUID.UUID(),
      amount: this.form.value.amount,
      currency: this.form.value.currency,
      sender: this.form.value.sender,
      description: this.form.value.description,
      typeTransaction: this.form.value.typeTransaction,
      date: new Date (this.form.value.myDate.jsdate),
      type: 'transaction'
    });
  }

}
