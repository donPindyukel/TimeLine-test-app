import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinancialEventComponent } from './add-financial-event.component';

describe('AddFinancialEventComponent', () => {
  let component: AddFinancialEventComponent;
  let fixture: ComponentFixture<AddFinancialEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFinancialEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFinancialEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
