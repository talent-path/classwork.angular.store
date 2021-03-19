import { Component, OnInit } from '@angular/core';
import { Product, productList } from 'src/app/product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  product : Product;
  constructor() { }

  ngOnInit(): void {
    this.product = productList[0];
  }

}
