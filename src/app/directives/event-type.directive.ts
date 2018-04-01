import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEventType]'
})
export class EventTypeDirective implements OnInit {

  @Input() type: string;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    switch (this.type) {
      case 'news': this.element.nativeElement.innerText = 'Новость'; break;
      case 'transaction': this.element.nativeElement.innerText = 'Транзакция'; break;
      default: break;
    }
  }
}
