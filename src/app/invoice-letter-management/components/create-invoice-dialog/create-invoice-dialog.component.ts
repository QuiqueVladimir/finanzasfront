import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice-entity';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-create-invoice-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatInput,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule
  ],
  templateUrl: './create-invoice-dialog.component.html',
  styleUrl: './create-invoice-dialog.component.css'
})
export class CreateInvoiceDialogComponent {
  invoice: Invoice;

  constructor(
    public dialogRef: MatDialogRef<CreateInvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { portfolioId: number, discountDate: string, userId: number, currency: string },
    private invoiceService: InvoiceService
  ) {
    this.invoice = {
      id: 0,
      portfolioId: data.portfolioId,
      userId: data.userId,
      invoiceNumber: '',
      client: '',
      amount: 0,
      issueDate: '',
      dueDate: data.discountDate,
      currency: data.currency,
      rateType: '',
      discountRate: 0
    };
  }

  onSave(): void {
    this.invoiceService.createInvoice(this.invoice).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
