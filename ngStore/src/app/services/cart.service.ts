import { Injectable } from '@angular/core';
import { CartItem } from '../cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : CartItem[] = [];
  constructor() { }
  addToCart(id:number):void {

    let toAdd = this.cart.find(item => item.itemId === id);
    if(toAdd) toAdd.quantity++;
    else this.cart.push({itemId:id, quantity:1})
  }
  removeItem(id:number): void{
    let toRemove = this.cart.find(item => item.itemId === id);
    if(!toRemove) return;
    if(toRemove.quantity <2) this.cart.splice(this.cart.indexOf(toRemove),1);
    else toRemove.quantity--;
  }
  getCart():CartItem[]{
    return this.cart;
}
}
