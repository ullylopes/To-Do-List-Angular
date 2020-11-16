import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Model } from '../model/model';
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

    getModels(): Observable<Model> {
        return this.http.get<Model>(this.apiURL +'/db')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    getModel(id):Observable<Model>{
        return this.http.get<Model>(this.apiURL + '/db/' + id)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    createModel(model): Observable<Model> {
        return this.http.post<Model>(this.apiURL + '/db',
            JSON.stringify(model), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )

    }

    updateModel(id, model): Observable<Model> {
        return this.http.put<Model>(this.apiURL + '/db/' + id,
            JSON.stringify(model), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }


    deleteModel(id) {
        return this.http.delete<Model>(this.apiURL + '/db/' +
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

            errorMessage = `Error Code: ${error.status}\nMessage:${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
