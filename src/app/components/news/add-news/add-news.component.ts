import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { UUID } from 'angular2-uuid';

import { Router } from '@angular/router';

import { News } from '../../../models/news';
import { DateValue } from '../../../models/date-value';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  myDatePickerOptions: IMyDpOptions;
  form: FormGroup;
  currentDate: DateValue;
  @Output() addNews: EventEmitter<News> = new EventEmitter();

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
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      myDate: new FormControl (null, Validators.required)
    });
  }

  onSubmit(): void {
   this.router.navigate(['/']);
    this.addNews.emit({
      id: UUID.UUID(),
      title: this.form.value.title,
      description: this.form.value.description,
      date: new Date (this.form.value.myDate.jsdate),
      type: 'news',
      readed: false,
    });
  }

}
