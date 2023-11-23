import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { City } from '../model/city.module';

@Injectable({
 providedIn: 'root'
})
export class CityService {
 public cities = [
  {
   id: '1',
   name: 'Riyadh',
   climate: 'Hot Desert',
   population: '7.7 million',
   image: '',
  },
  {
   id: '2',
   name: 'Mecca',
   climate: 'Hot Desert',
   population: '1.53 million',
   image: '',
  },
  {
   id: '3',
   name: 'Medina',
   climate: 'Hot Desert',
   population: '1.2 million',
   image: '',
  },
  {
   id: '4',
   name: 'Al-Baha',
   climate: 'Mountainous',
   population: '533,000',
   image: '',
  },
  {
   id: '5',
   name: 'Al-Qassim',
   climate: 'Desert',
   population: '1.42 million',
   image: '',
  },
  {
   id: '6',
   name: 'Tabuk',
   climate: 'Desert',
   population: '799,000',
   image: '',
  },
  {
   id: '7',
   name: 'Hail',
   climate: 'Desert',
   population: '527,000',
   image: '',
  },
  {
   id: '8',
   name: 'Abha',
   climate: 'Mountainous',
   population: '1.2 million',
   image: '',
  },
  {
   id: '9',
   name: 'Jazan',
   climate: 'Tropical',
   population: '1.7 million',
   image: '',
  },
  {
   id: '10',
   name: 'Al-Khobar',
   climate: 'Hot Desert',
   population: '1.6 million',
   image: '',
  },
  {
   id: '11',
   name: 'Hail',
   climate: 'Desert',
   population: '527,000',
   image: '',
  },
  {
   id: '12',
   name: 'Al-Taif',
   climate: 'Mountainous',
   population: '1.2 million',
   image: '',
  },

 ];

 // Nodejs API
 private REST_API = "http://localhost:5006";
 // Set Http Headers.
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

 constructor(private httpClient: HttpClient) { }


 //Add

 //Update

 //View
viewCity(): Observable<City[]>{  
  return this.httpClient.get<City []>(`${this.REST_API}/cities/AllCity`);
}



 //Delete

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