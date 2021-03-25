import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartItem[];
  constructor(private cartService: CartService) { }

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
