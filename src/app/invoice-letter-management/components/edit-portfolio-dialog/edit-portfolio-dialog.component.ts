import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatOption, MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-edit-portfolio-dialog',
  standalone: true,
    imports: [
      MatCardModule,
      MatFormFieldModule,
      FormsModule,
      MatInputModule,
      MatSelectModule,
      MatOption,
      MatDatepickerModule,
      MatNativeDateModule,
      MatButtonModule
    ],
  templateUrl: './edit-portfolio-dialog.component.html',
  styleUrl: './edit-portfolio-dialog.component.css'
})
export class EditPortfolioDialogComponent {
  constructor(public dialogRef: MatDialogRef<EditPortfolioDialogComponent>) {}

  onSave(): void {
    // Implement save logic here
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
