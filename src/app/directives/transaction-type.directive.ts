import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTransactionType]'
})
export class TransactionTypeDirective implements OnInit {
  @Input() type: string;
  constructor(private element: ElementRef) { }

  ngOnInit() {
    switch (this.type) {
      case 'income': this.element.nativeElement.innerText = '+'; break;
      case 'expend': this.element.nativeElement.innerText = '-'; break;
      default: break;
    }
  }
}
