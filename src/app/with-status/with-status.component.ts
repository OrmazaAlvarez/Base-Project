import { HttpClient, JsonpClientBackend } from "@angular/common/http";
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

  storeModel: Array<Product>;
  purchasedItems: Array<Product>;
  @ViewChild(ConfirmationAlertComponent,{ static: false })
  alertChild:ConfirmationAlertComponent;
  private storeSubscription: Subscription;

  constructor(private http: HttpClient) { 
    this.purchasedItems = new Array<Product>();
    this.storeModel = new Array<Product>();
    this.alertChild = ConfirmationAlertComponent.prototype;
    this.storeSubscription = Subscription.prototype;
  }

  ngOnInit(): void {
    this.storeSubscription = this.http
      .get("http://localhost:4200/assets/data/data.json")
      .subscribe((resultados: any)  => {
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
      return this.purchasedItems.reduce((prev:number, item:Product ) => item.price? prev + item.price: prev + 0,
      0);
    }
    return 0;
  }
}