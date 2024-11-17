import { Component } from '@angular/core';
import {PortfolioCardComponent} from '../../components/portfolio-card/portfolio-card.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {CreatePortfolioDialogComponent} from '../../components/create-portfolio-dialog/create-portfolio-dialog.component';
import { Portfolio } from '../../models/portfolio-entity';
import { PortfolioService } from '../../services/portfolio.service';
import {NgForOf} from '@angular/common';
import {UserPortfoliosService} from '../../services/user-portfolios.service';

@Component({
  selector: 'app-portfolio-management',
  standalone: true,
  imports: [
    PortfolioCardComponent,
    MatPaginator,
    MatButton,
    NgForOf
  ],
  templateUrl: './portfolio-management.component.html',
  styleUrl: './portfolio-management.component.css'
})
export class PortfolioManagementComponent {
  portfolios: Portfolio[] = [];
  totalPortfolios = 0;
  userId: number | null = null;

  constructor(private portfolioService: PortfolioService,
              public dialog: MatDialog,
              public userPortfoliosService: UserPortfoliosService) {}

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.userId = 1;

    if (this.userId) {
      this.loadPortfolios();
    }
  }

  loadPortfolios(): void {
    this.userPortfoliosService.getUserPortfoliosByUserId(this.userId!).subscribe(userPortfolios => {
      const portfolioIds = userPortfolios.map(up => up.portfolioId);
      this.portfolioService.getPortfoliosByIds(portfolioIds).subscribe(portfolios => {
        this.portfolios = portfolios;
        this.totalPortfolios = portfolios.length;
      });
    });
  }

  openCreatePortfolioDialog(): void {
    const dialogRef = this.dialog.open(CreatePortfolioDialogComponent, {
      width: '400px',
      data: { userId: this.userId }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPortfolios();
      }
    });
  }

  onPageChange(event: any): void {

  }

}
