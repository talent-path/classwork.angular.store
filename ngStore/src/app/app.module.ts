import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/pages/shop/shop.component';


@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    ProductDisplayComponent,
    CartComponent,
    ShopComponent,
    
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
