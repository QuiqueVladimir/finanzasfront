import { Component, Inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOption, MatSelectModule} from '@angular/material/select';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PortfolioService } from '../../services/portfolio.service';
import {UserPortfolio} from '../../models/user-portfolios-entity';
import { Portfolio } from '../../models/portfolio-entity';
import {UserPortfoliosService} from '../../services/user-portfolios.service';

@Component({
  selector: 'app-create-portfolio-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatOption,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-portfolio-dialog.component.html',
  styleUrl: './create-portfolio-dialog.component.css'
})
export class CreatePortfolioDialogComponent {
  createForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreatePortfolioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userId: number },
    private fb: FormBuilder,
    private portfolioService: PortfolioService,
    private userPortfolioService: UserPortfoliosService
  ) {
    this.createForm = this.fb.group({
      name: [''],
      currency: [''],
      createdDate: [''],
      discountDate: ['']
    });
  }

  onSave(): void {
    const newPortfolio: Portfolio = {
      id: 0,
      name: this.createForm.value.name,
      currency: this.createForm.value.currency,
      numInvoices: 0,
      createdDate: this.createForm.value.createdDate,
      discountDate: this.createForm.value.discountDate
    };
    this.portfolioService.createPortfolio(newPortfolio).subscribe(createdPortfolio => {
      const userPortfolio: UserPortfolio = new UserPortfolio({
        id: 0,
        userId: this.data.userId,
        portfolioId: createdPortfolio.id,
        status: 'active',
        creatingDate: new Date().toISOString(),
        deletedDate: null });
      this.userPortfolioService.createUserPortfolio(userPortfolio).subscribe(() => {
        this.dialogRef.close(true);
      });
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
