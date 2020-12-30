import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-status',
  templateUrl: './shopping-cart-status.component.html',
  styleUrls: ['./shopping-cart-status.component.sass']
})
export class ShoppingCartStatusComponent implements OnInit, OnChanges {
  @Input() price: number;
  @Input() storeModel: Array<Object>;

  @Output() pay: EventEmitter<null> = new EventEmitter();
  constructor() { }

  ngOnInit(){
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.price.currentValue < changes.price.previousValue){
      alert("Are you sure you want to check out items?")
    }
  }

  makePayment(){
    this.pay.emit();
  }
}
