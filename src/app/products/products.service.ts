import { Injectable,EventEmitter } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://www.json-generator.com/api/json/get/ceQJFdskRK?indent=2';
  EventEmitter<any> productDetailemmiter;

 constructor (private http: HttpClient) {   this.productDetailemmiter = new EventEmitter<any>();}
   
    public getMyProductData(): Observable<JSON[]> {
         return this.http.get(this.baseUrl).pipe(
         map((res: Response) => res));
    }

    public emmitProductDetailClickEvent(data:any):void
    {
       
       this. productDetailemmiter.emit(data);   
    }

    public getProductDetailEventEmmiter()
    {
       return this.productDetailemmiter;
    }
}
