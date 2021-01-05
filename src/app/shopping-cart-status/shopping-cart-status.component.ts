import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-shopping-cart-status',
  templateUrl: './shopping-cart-status.component.html',
  styleUrls: ['./shopping-cart-status.component.sass']
})
export class ShoppingCartStatusComponent implements OnInit, OnChanges {
  @Input() total: number;
  @Input() shoppingCart: Array<Product>;

  @Output() pay: EventEmitter<null> = new EventEmitter();
  constructor() { 
    this.shoppingCart = new Array<Product>();
    this.total = 0;
   }

  ngOnInit() {}

   ngOnChanges(changes: SimpleChanges) {
    if(changes.total.currentValue < changes.total.previousValue){
      alert("Are you sure you want to check out items?")
    }
  }

  makePayment(){
    this.pay.emit();
  }
}
