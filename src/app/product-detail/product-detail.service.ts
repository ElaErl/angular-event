import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
    private baseUrl = 'http://www.json-generator.com/api/json/get/ceQJFdskRK?indent=2';

    constructor (private http: HttpClient) {}

    public getMyProductData(): Observable<JSON[]> {
         return this.http.get(this.baseUrl).pipe(
         map((res: Response) => res));
    }