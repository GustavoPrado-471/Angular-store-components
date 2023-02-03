import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
     // Dependency Injection
     private http : HttpClient
  ) {}

  // Hacemos una funcion para el request de la API
  getProductsAPI(){
    // Se hace el llamado a la API y se guarda en http
    return this.http.get('https://fakestoreapi.com/products');
  }
}
