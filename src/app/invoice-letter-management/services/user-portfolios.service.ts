import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Portfolio} from '../models/portfolio-entity';
import {catchError, Observable, retry } from 'rxjs';
import {UserPortfolio} from '../models/user-portfolios-entity';

@Injectable({
  providedIn: 'root'
})
export class UserPortfoliosService extends BaseService<Portfolio> {

  constructor() {
    super('/userPortfolios');
  }

  getUserPortfoliosByUserId(userId: number): Observable<UserPortfolio[]> {
    return this.http.get<UserPortfolio[]>(`${this.resourcePath()}?userId=${userId}&status=active`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  createUserPortfolio(userPortfolio: UserPortfolio): Observable<UserPortfolio> {
    return this.http.post<UserPortfolio>(this.resourcePath(), userPortfolio, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getUserPortfoliosByPortfolioId(portfolioId: number): Observable<UserPortfolio[]> {
    return this.http.get<UserPortfolio[]>(`${this.resourcePath()}?portfolioId=${portfolioId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateUserPortfolio(id: number, userPortfolio: UserPortfolio): Observable<void> {
    return this.http.patch<void>(`${this.resourcePath()}/${id}`, userPortfolio, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
