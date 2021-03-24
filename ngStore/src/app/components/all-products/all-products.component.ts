import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cartItem';
import { Product, productDataSource } from 'src/app/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: Product[];
  cart: CartItem[];
  constructor() { }

  ngOnInit(): void {
    this.products = [...productDataSource];
    this.cart = [];
  }
  addToCart(id):void {
    console.log(id);
    let toAdd = this.cart.find(item => item.itemId === id);
    if(toAdd) toAdd.quantity++;
    else this.cart.push({itemId:id, quantity:1})
  }

}
