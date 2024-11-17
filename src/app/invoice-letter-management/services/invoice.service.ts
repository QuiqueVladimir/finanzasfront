import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Invoice} from '../models/invoice-entity';
import {catchError, Observable, retry, tap } from 'rxjs';
import {PortfolioService} from './portfolio.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends BaseService<Invoice>{

  constructor(private portfolioService: PortfolioService) {
    super('/invoices');
  }

  getInvoicesByPortfolioId(portfolioId: number): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.resourcePath()}?portfolioId=${portfolioId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteInvoiceById(id: number, portfolioId: number): Observable<void> {
    return this.delete(id).pipe(
      tap(() => this.portfolioService.updateNumInvoices(portfolioId, -1).subscribe()),
      retry(2),
      catchError(this.handleError)
    );
  }
  createInvoice(invoice: Invoice): Observable<Invoice> {
    return this.create(invoice).pipe(
      tap(() => this.portfolioService.updateNumInvoices(invoice.portfolioId, 1).subscribe())
    );
  }

  updateInvoice(id: number, invoice: Partial<Invoice>): Observable<Invoice> {
    return this.http.patch<Invoice>(`${this.resourcePath()}/${id}`, invoice, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
