import { Product } from './../interfaces/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-without-status',
  templateUrl: './without-status.component.html',
  styleUrls: ['./without-status.component.sass']
})
export class WithoutStatusComponent implements OnInit {
  @Input() Product:Product;

  private disabled:boolean;
  public actionBuy:string = "";
  constructor() {
    this.disabled = false;
   }

  ngOnInit(): void {
    this.actionBuy = `BUY FOR $${this.Product.price}`;
  }

  selectItem(){
    this.disabled = true;
    this.actionBuy = "ADDED TO CART"
  }
  isItemDisabled(){
    return !!this.disabled
  }

}
