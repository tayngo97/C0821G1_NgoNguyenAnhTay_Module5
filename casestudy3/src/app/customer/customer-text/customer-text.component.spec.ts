import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTextComponent } from './customer-text.component';

describe('CustomerTextComponent', () => {
  let component: CustomerTextComponent;
  let fixture: ComponentFixture<CustomerTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
