import { Component, OnInit } from '@angular/core';
import { Product, productDataSource } from 'src/app/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: Product[];
  constructor() { }

  ngOnInit(): void {
    this.products = [...productDataSource];
  }

}
