import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-list/product';

const URL = "http://localhost:3000/products";
@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(URL);
  }

  createProduct(product: any):Observable<Product> {
    //console.log(product);
    return this.http.post<any>(URL,product,this.httpOptions);
  }
}
