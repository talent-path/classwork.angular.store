import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartItem[];
  constructor(private cartService: CartService, private productService: ProductService) { }
  getProductName(cartItem:CartItem): string {
    return this.productService.getProductFromId(cartItem.itemId).name;
  }
  ngOnInit(): void {
    this.cart=this.cartService.getCart();
  }
  addToCart(cartItem:CartItem): void {
    this.cartService.addToCart(cartItem.itemId);
  }
  removeFromCart(cartItem:CartItem): void {
    this.cartService.removeItem(cartItem.itemId);
  }

}
