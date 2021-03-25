import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product, productDataSource } from '../product';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: Product[] = [...productDataSource]
httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

constructor(private http: HttpClient) { }
getProductFromId(id:number){
  return this.products.find( product => product.id===id);
}

getProducts(): Observable<Product[]> {
  let observableToReturn: Observable<any> = this.http.get('http://fakeurl:NOTAREALPORT/api/endpoint', this.httpOptions).pipe(
    tap(_ => console.log('images successfully retrieved')),
   
  )
  return of(this.products);
  }


}


