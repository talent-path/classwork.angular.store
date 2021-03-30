import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  submit(name,email,address){
    console.log(name,email,address);
  }

}
