import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { model } from '../model/model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({

    providedIn: 'root'
})

export class RestApiService {

    apiURL = 'http://localhost:3000';
    constructor(private http: HttpClient) { }


    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getModels(): Observable<model> {
        return this.http.get<model>(this.apiURL + '/db')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    getModel(id): Observable<model> {
        return this.http.get<model>(this.apiURL + '/db/' + id)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    createModel(model): Observable<model> {
        return this.http.post<model>(this.apiURL + '/db',
            JSON.stringify(model), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )

    }

    updateModel(id, model): Observable<model> {
        return this.http.put<model>(this.apiURL + '/db/' + id,
            JSON.stringify(model), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }


    deleteModel(id) {
        return this.http.delete<model>(this.apiURL + '/db/' +
            id, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {

            errorMessage = error.error.message;
        } else {

            errorMessage = `Error Code: ${error.status}\nMessage:
${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
