import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {inject} from "@angular/core";

export class BaseService <T>{
  protected httpOptions={ headers: new HttpHeaders({'Content-Type':'application/json'})};

  protected http:HttpClient = inject(HttpClient);

  protected basePath: string = `http://localhost:3000`;

  protected resourceEndPoint: string = '/resources';

  constructor(resourceEndPoint: string) {
    this.resourceEndPoint = resourceEndPoint;
  }

  protected handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error(`An error occurred: ${error.message}`);
    }else{
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  protected resourcePath(): string{
    return `${this.basePath}${this.resourceEndPoint}`;
  }


  public create(item: any): Observable<T>{
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }

  public delete(id:any): Observable<any>{
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }

  public update(id: any, item: any): Observable<T>{
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }

  public getAll(): Observable<Array<T>>{
    return this.http.get<Array<T>>(this.resourcePath(), this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }
}
