import { Component, Inject } from '@angular/core';
import { Invoice } from '../../models/invoice-entity';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InvoiceService } from '../../services/invoice.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule, MatOption, provideNativeDateAdapter} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-edit-invoice-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelect,
    MatOption
  ],
  templateUrl: './edit-invoice-dialog.component.html',
  styleUrl: './edit-invoice-dialog.component.css'
})
export class EditInvoiceDialogComponent {
  invoice: Invoice;

  constructor(
    public dialogRef: MatDialogRef<EditInvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { invoice: Invoice },
    private invoiceService: InvoiceService
  ) {
    this.invoice = { ...data.invoice };
    console.log(this.invoice);
  }

  onSave(): void {
    this.invoiceService.updateInvoice(this.invoice.id, this.invoice).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
