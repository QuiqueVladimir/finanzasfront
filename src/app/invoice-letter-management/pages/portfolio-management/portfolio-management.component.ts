import { Component } from '@angular/core';
import {PortfolioCardComponent} from '../../components/portfolio-card/portfolio-card.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {CreatePortfolioDialogComponent} from '../../components/create-portfolio-dialog/create-portfolio-dialog.component';

@Component({
  selector: 'app-portfolio-management',
  standalone: true,
  imports: [
    PortfolioCardComponent,
    MatPaginator,
    MatButton
  ],
  templateUrl: './portfolio-management.component.html',
  styleUrl: './portfolio-management.component.css'
})
export class PortfolioManagementComponent {

  portfolios = Array(9).fill({
    name: 'PORTFOLIO NAME',
    currency: 'USD',
    creationDate: '10-11-2024 10:20',
    discountDate: '15-02-2023 23:50'
  });

  totalPortfolios = this.portfolios.length;

  constructor(public dialog: MatDialog) {}

  openCreatePortfolioDialog() {
    const dialogRef = this.dialog.open(CreatePortfolioDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed');
    });
  }

  onPageChange(event: any) {
  }
}
