import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit(): void {
    this.product = {
      id: 1,
      name: "Pencil",
      price: 1.50,
      category: "Office Supplies",
      description: "graphite surrounded by wood"
    };
  }

}
