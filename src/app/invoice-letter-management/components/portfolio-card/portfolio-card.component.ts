import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { EditPortfolioDialogComponent } from '../edit-portfolio-dialog/edit-portfolio-dialog.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Portfolio } from '../../models/portfolio-entity';
import {DatePipe} from '@angular/common';
import {PortfolioService} from '../../services/portfolio.service';
import {UserPortfoliosService} from '../../services/user-portfolios.service';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule,
    DatePipe
  ],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css'
})
export class PortfolioCardComponent {
  @Input() portfolio!: Portfolio;

  constructor(public dialog: MatDialog,
              private router: Router,
              private userPortfolioService: UserPortfoliosService) {}

  openEditDialog(event: Event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(EditPortfolioDialogComponent, {
      width: '400px',
      data: { portfolio: this.portfolio }
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
    this.userPortfolioService.getUserPortfoliosByPortfolioId(this.portfolio.id).subscribe(userPortfolios => {
      if (userPortfolios.length > 0) {
        const userPortfolio = userPortfolios[0];
        userPortfolio.status = 'erased';
        this.userPortfolioService.updateUserPortfolio(userPortfolio.id, userPortfolio).subscribe(() => {
          console.log('Portfolio status updated to erased');
        });
      }
    });
  }


  navigateToInvoiceList() {
    this.router.navigate(['/portfolios/', this.portfolio.id]);
  }
}
