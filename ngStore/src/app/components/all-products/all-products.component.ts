import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cartItem';
import { Product, productDataSource } from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: Product[];
  cart: CartItem[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = [...productDataSource];
    this.cart = this.cartService.getCart();
  }
  addToCart(id:number):void {
    this.cartService.addToCart(id);
  }


}
