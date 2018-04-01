import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from '../../../models/news';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {
  @Input() newsData: News;
  @Output() removeNews: EventEmitter<any> = new EventEmitter();
  @Output() readedNews: EventEmitter<any> = new EventEmitter();
  isShowDescription = false;
  constructor() { }

  ngOnInit() {

  }

  onClickDelete() {
    this.removeNews.emit();
  }

  onClickReaded() {
    this.readedNews.emit();
  }
}
