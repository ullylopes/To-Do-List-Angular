import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { model } from '../model/model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({

  providedIn: 'root'
})

export class RestApiService {
  // Define API
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  /*========================================
  Métodos CRUD para consumir a RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // HttpClient API método get() => Busca a Lista employee
  getModels(): Observable<model> {
    return this.http.get<model>(this.apiURL + '/db')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API método get()=> busca employee por id
  getModel(id): Observable<model> {
    return this.http.get<model>(this.apiURL + '/db/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API método post()=> Cria employee
  createModel(model): Observable<model> {
    return this.http.post<model>(this.apiURL + '/db',
      JSON.stringify(model), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )

  }
  // HttpClient API método put()=> Update (atualiza) employee
  updateModel(id, model): Observable<model> {
    return this.http.put<model>(this.apiURL + '/db/' + id,
      JSON.stringify(model), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API método delete() => “Deleta” (exclui) employee
  deleteModel(id) {
    return this.http.delete<model>(this.apiURL + '/model/' +
      id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // Error handling (Manipulador de erro)
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error (manipulador de erro do servidor)
      errorMessage = `Error Code: ${error.status}\nMessage:
${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
