## Introduction ##

Currently, we have a list of products living in an array in our product.ts file. In most applications, that data will come from the outside world. Although we will not be getting data from the outside world, we're going to refactoring our application to work as if we were getting it from outside sources. Additionally, there will be examples of how to properly communicate with a REST api in order to get data from the outside world.

## Creating our Service ##

* Generate a product service with the command ``ng generate service services/product`` 
* Bring in a copy of our productDataSource array and store it as a property the data in the service
* add a useful methods to map the ID's from a CartItem to a Product

```Typescript
getProductFromId(id:number){
  return this.products.find( product => product.id===id);
}
```

* Edit the cart component to make use of the this method in order to display a name instead of a cartItemId

```Typescript
constructor(private cartService: CartService, private productService: ProductService) { }
getProductName(cartItem:CartItem): string {
return this.productService.getProductFromId(cartItem.itemId).name;
}
```

```html
<div class="container">
    <div class="cartItem" *ngFor="let cartItem of cart">
        <div class="itemInfo">
            <span class="itemId">{{getProductName(cartItem)}}</span>

            <span class="itemQuantity">Item Quantity: {{cartItem.quantity}}</span>
        </div>
        <div class="buttons">
            <button class="add" (click)="addToCart(cartItem)">+</button>
            <button class="remove" (click)="removeFromCart(cartItem)">-</button>
        </div>

    </div>
    <div *ngIf="cart.length === 0" class="cartItem">
        <span>cart is empty</span>
    </div>
</div>
```





## Making Http Requests ##

Add the HttpClientModule to your ``app.module.ts``
```Typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    ProductDisplayComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```



* Navigate back to your ``product.service.ts``
* Add HttpClient to your service and create httpOptions for your request as shown below

```Typescript
export class ProductService {
products: Product[] = [...productDataSource]
httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

constructor(private http: HttpClient) { }
}
```


HttpClient is a library in angular that offers a full suite of http request functionality similar to Ajax or Axios.

[read more about http client here](https://angular.io/api/common/http/HttpClient)

* To implement a GET request, implement we can use a setup similar to this:

```Typescript
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

getProducts(): Observable<Product[]> {
  let observableToReturn: Observable<any> = this.http.get('http://fakeurl:NOTAREALPORT/api/endpoint', this.httpOptions).pipe(
    tap(_ => console.log('images successfully retrieved')),
   
  )
  return observableToReturn;
  }
}
```

To explain whats going on in this method, we use Angular's HttpClient to make a get request. HttpClient's method returns an Observable which is similar to a Promise. The key difference between an Observable and Promises are that Observables are lazilly loaded. This means that the Observable tries to have the data ready from the get request at the time when the .subscribe() method is called.

** IMPORTANT NOTE: If an Observable is never subscribed to, the http request will never take place ** 
[read more about observables here](https://angular.io/guide/observables)

* For the purposes of this tutorial, instead of returning an observable with no data, we'll be returning on observable created with the ``of()`` method from ``rxjs/operators``

```Typescript
return of(this.products);
```



## Handling Observables ##
Now that this method returns an observable we can look into how to handle the observable in our ``all-products.component.ts``

* Replace getting the data directly from the source in the ``ngOnInit()``and instead get that data as an observable from our ``Product Service``

```Typescript
export class AllProductsComponent implements OnInit {

  products: Product[];
  
  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    //replaced
    let prodObservable = this.productService.getProducts();
  }
  addToCart(id:number):void {
    this.cartService.addToCart(id);
  }
}
```

to access the data from that observable, call the ``.subscribe()`` method

```Typescript
prodObservable.subscribe(data => this.products = data);
```

Something else important to note about Observables is their asynchronous nature. That means that we are not guarunteed  that  the data from the subscribe method is provided at any time outside of the subscribe method.

Although not much has changed visually here, I do want to show that the site remains fully functional even when serving asynchronous data.

[read more about asynchronous programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)


![with observable](./assets/prodServiceFinished.png)




[previous: cart service](./services.md) || [next: routing](./routing.md)

