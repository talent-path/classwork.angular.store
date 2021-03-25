import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cartItem';
import { Product, productDataSource } from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: Product[];
  
  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    //Replaced
    let prodObservable = this.productService.getProducts();
    prodObservable.subscribe(data => this.products = data);
    
  }
  addToCart(id:number):void {
    this.cartService.addToCart(id);
  }


}
