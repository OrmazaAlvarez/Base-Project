import { HttpClient } from "@angular/common/http";
import { ConfirmationAlertComponent } from './../confirmation-alert/confirmation-alert.component';
import { Product } from './../interfaces/product';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-with-status',
  templateUrl: './with-status.component.html',
  styleUrls: ['./with-status.component.sass']
})
export class WithStatusComponent implements OnInit, OnDestroy {

  storeModel: Object;
  purchasedItems: Array<Product>;
  @ViewChild(ConfirmationAlertComponent,{ static: false })
  alertChild:ConfirmationAlertComponent;
  private storeSubscription: Subscription;

  constructor(private http: HttpClient) { 
    this.purchasedItems = [];
    this.storeModel = { itemsStore: []};
  }

  ngOnInit(): void {
    this.storeSubscription = this.http
      .get("http://localhost:4200/assets/data/data.json")
      .subscribe((resultados) => {
        this.storeModel = resultados;
      });
  }
  
  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  onSelectProduct(_event: Product){
    this.purchasedItems.push(_event);
  }

  onUnSelectProduct(_event: Product){
    this.purchasedItems.splice(this.purchasedItems.indexOf(_event),1);
  }

  makePayment(){
    this.alertChild.hideShow();
  }

  getTotalPrice(){
    if (this.purchasedItems){
      return this.purchasedItems.reduce((prev:number, item:Product ) => prev + item.price,
      0);
    }
  }
}