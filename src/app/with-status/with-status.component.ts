import { Store } from './../models/store.model';
import { Product } from './../interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-status',
  templateUrl: './with-status.component.html',
  styleUrls: ['./with-status.component.sass']
})
export class WithStatusComponent implements OnInit {

  storeModel: Store = new Store();
  purchasedItems: Array<Product>;
  constructor() { 
    this.purchasedItems = [];
  }

  ngOnInit(): void {
  }
}