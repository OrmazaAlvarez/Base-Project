import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-shopping-cart-status',
  templateUrl: './shopping-cart-status.component.html',
  styleUrls: ['./shopping-cart-status.component.sass']
})
export class ShoppingCartStatusComponent implements OnInit, OnChanges, OnDestroy {
  @Input() total: number;
  @Input() shoppingCart: Array<Product>;
  @Output() pay: EventEmitter<null> = new EventEmitter();

  constructor() { 
    this.shoppingCart = new Array<Product>();
    this.total = 0;
   }

  ngOnInit() {
    this.triggerKeyboardEvent();
  }

   ngOnChanges(changes: SimpleChanges) {
    if(changes.total.currentValue < changes.total.previousValue){
      alert("Are you sure you want to check out items?")
    }
  }

  ngOnDestroy(){
    document.removeEventListener("keypress", this.onKeyboard)   
  }

  makePayment(){
    this.pay.emit();
  }

  onKeyboard(_event){
    if(_event.code === "Enter" || _event.code === "NumpadEnter"){
      this.makePayment();
    }
  }

  triggerKeyboardEvent(){
    document.addEventListener("keypress", (evento) => {this.onKeyboard(evento);});
  }
}
