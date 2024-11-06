import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationInvoicesComponent } from './registration-invoices.component';

describe('RegistrationInvoicesComponent', () => {
  let component: RegistrationInvoicesComponent;
  let fixture: ComponentFixture<RegistrationInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationInvoicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
