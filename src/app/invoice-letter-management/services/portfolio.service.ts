import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Portfolio} from '../models/portfolio-entity';
import {catchError, Observable, retry, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService extends BaseService<Portfolio> {

  constructor() {
    super('/portfolios');
  }

  getPortfoliosByUserId(userId: number): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(`${this.resourcePath()}?userId=${userId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getPortfoliosByIds(ids: number[]): Observable<Portfolio[]> {
    const params = ids.map(id => `id=${id}`).join('&');
    return this.http.get<Portfolio[]>(`${this.resourcePath()}?${params}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getPortfolioById(id: number): Observable<Portfolio> {
    return this.http.get<Portfolio>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  createPortfolio(portfolio: Portfolio): Observable<Portfolio> {
    return this.create(portfolio);
  }

  editPortfolio(id: number, portfolio: Partial<Portfolio>): Observable<Portfolio> {
    return this.http.patch<Portfolio>(`${this.resourcePath()}/${id}`, portfolio, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateNumInvoices(id: number, change: number): Observable<void> {
    return this.getPortfolioById(id).pipe(
      switchMap(portfolio => {
        const updatedPortfolio = { numInvoices: portfolio.numInvoices + change };
        return this.http.patch<void>(`${this.resourcePath()}/${id}`, updatedPortfolio, this.httpOptions);
      }),
      retry(2),
      catchError(this.handleError)
    );
  }

  deletePortfolio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
