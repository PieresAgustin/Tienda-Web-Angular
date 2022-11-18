import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Brand } from './brand';

const URL = environment.apiURL + 'brands';

@Injectable({
  providedIn: 'root'
})
export class BrandDataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Brand[]>{
    return this.http.get<Brand[]>(URL);
  }
}
