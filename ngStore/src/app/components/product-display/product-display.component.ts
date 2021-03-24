import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  @Input() product: Product;
  @Output() cartEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  addToCart():void {
    console.log('emitting from product: '+this.product.id)
    this.cartEmitter.emit(this.product.id);
  }

}
