import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPortfolioDialogComponent } from './edit-portfolio-dialog.component';

describe('EditPortfolioDialogComponent', () => {
  let component: EditPortfolioDialogComponent;
  let fixture: ComponentFixture<EditPortfolioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPortfolioDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPortfolioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
