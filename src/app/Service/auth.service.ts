import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from '../model/user.model';

@Injectable({
 providedIn: 'root'
})


export class AuthService {

 // Nodejs API
 private REST_API = "http://localhost:5006";
 // Set Http Headers.
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

 constructor(private httpClient: HttpClient) { }


 //Add

 //Update

 //View

 //Delete

 register(user: User): Observable <any>{
  return this.httpClient.post(`${this.REST_API}/users/newUser`, user); 
 }


 login(email: any,password: any):Observable <any>{
  let API_URL = `${ this.REST_API}/User/login`;
  return this.httpClient.post(API_URL,email, password).pipe(catchError(this.handleError))
 }


 authenticate():Observable <any>{
   return this.httpClient.get<User []>(`${this.REST_API}/User/authenticate`); 
 }


 // Error 
 handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
   errorMessage = error.error.message;
  } else {
   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
 }
}