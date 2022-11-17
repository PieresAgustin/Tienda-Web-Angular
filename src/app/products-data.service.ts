import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

const URL = "https://tienda-web.onrender.com/products";
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
    return this.http.post<any>(URL,product,this.httpOptions);
  }

  deleteProduct(id:number):Observable<any> {
    return this.http.delete<number>(`${URL}/${id}`);
  }
}
