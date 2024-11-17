import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import{EditInvoiceDialogComponent} from '../../components/edit-invoice-dialog/edit-invoice-dialog.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import { Invoice } from '../../models/invoice-entity';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import {DatePipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {CreateInvoiceDialogComponent} from '../../components/create-invoice-dialog/create-invoice-dialog.component';
import {Portfolio} from '../../models/portfolio-entity';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [
    MatColumnDef,
    MatHeaderCell,
    MatTable,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatPaginator,
    DatePipe,
    MatHeaderRow,
    MatButton,
    MatHeaderRowDef,
    MatRowDef,
    MatRow
  ],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent implements OnInit{
  portfolioId!: number;
  portfolio!: Portfolio;
  userId: number | null = null;
  invoices: Invoice[] = [];
  displayedColumns: string[] = ['invoiceNumber', 'client', 'amount', 'issueDate', 'currency', 'rateType', 'discountRate', 'actions'];
  dataSource = new MatTableDataSource<Invoice>(this.invoices);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private route: ActivatedRoute,
              private invoiceService: InvoiceService,
              private portfolioService: PortfolioService,
              public dialog: MatDialog)
  {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.userId = 1;
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.portfolioId = Number(params.get('id'));
      this.getPortfolioData();
      this.getInvoices();
    });
  }


  getPortfolioData(): void {
    this.portfolioService.getPortfolioById(this.portfolioId).subscribe(portfolio => {
      this.portfolio = portfolio;
    });
  }

  openEditDialog(invoice: Invoice): void {
    const dialogRef = this.dialog.open(EditInvoiceDialogComponent, {
      width: '400px',
      data: { invoice }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getInvoices();
      }
    });
  }

  getInvoices(): void {
    this.invoiceService.getInvoicesByPortfolioId(this.portfolioId).subscribe(invoices => {
      this.invoices = invoices;
      this.dataSource.data = this.invoices;
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteInvoice(id: number): void {
    this.invoiceService.deleteInvoiceById(id, this.portfolioId).subscribe(() => {
      this.getInvoices();
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateInvoiceDialogComponent, {
      width: '400px',
      data: {
        portfolioId: this.portfolioId,
        discountDate: this.portfolio.discountDate,
        userId: this.userId,
        currency: this.portfolio.currency
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getInvoices();
      }
    });
  }

}
