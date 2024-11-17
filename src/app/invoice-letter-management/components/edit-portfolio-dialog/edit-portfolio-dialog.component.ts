import { Component, Inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatOption, MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Portfolio } from '../../models/portfolio-entity';
import { PortfolioService } from '../../services/portfolio.service';


@Component({
  selector: 'app-edit-portfolio-dialog',
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
  templateUrl: './edit-portfolio-dialog.component.html',
  styleUrl: './edit-portfolio-dialog.component.css'
})
export class EditPortfolioDialogComponent {
  editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditPortfolioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { portfolio: Portfolio },
    private fb: FormBuilder,
    private portfolioService: PortfolioService
  ) {
    this.editForm = this.fb.group({
      name: [data.portfolio.name],
      currency: [data.portfolio.currency],
      createdDate: [data.portfolio.createdDate],
      discountDate: [data.portfolio.discountDate]
    });
  }

  onSave(): void {
    const updatedPortfolio: Partial<Portfolio> = this.editForm.value;
    this.portfolioService.editPortfolio(this.data.portfolio.id, updatedPortfolio).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
