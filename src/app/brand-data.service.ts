import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Brand } from './brand';

const URL = "https://tienda-web.onrender.com/brands";

@Injectable({
  providedIn: 'root'
})
export class BrandDataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Brand[]>{
    return this.http.get<Brand[]>(URL);
  }
}
