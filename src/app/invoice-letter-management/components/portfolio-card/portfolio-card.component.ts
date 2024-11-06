import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { EditPortfolioDialogComponent } from '../edit-portfolio-dialog/edit-portfolio-dialog.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css'
})
export class PortfolioCardComponent {
  constructor(public dialog: MatDialog, private router: Router) {}

  openEditDialog(event: Event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(EditPortfolioDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Edit dialog closed');
      }
    });
  }

  openConfirmDeleteDialog(event: Event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletePortfolio();
      }
    });
  }

  deletePortfolio() {
    console.log('Portfolio deleted');
  }

  navigateToInvoiceList() {
    this.router.navigate(['/portfolios/invoice-list']);
  }
}
