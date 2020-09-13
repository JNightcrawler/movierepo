import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {retry,catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }


  getmoviedetail(name:string):Observable<any>
  {
    return this.http.get<any>("http://www.omdbapi.com/?s="+name+"&apikey=d4a30481").pipe(retry(2),catchError((error:HttpErrorResponse)=>{
    let errorMessage='';  
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
    }));
   
  }

}
