import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithStatusComponent } from './with-status/with-status.component';
import { WithoutStatusComponent } from './without-status/without-status.component';
import { ConfirmationAlertComponent } from './confirmation-alert/confirmation-alert.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageContainerComponent } from './image-container/image-container.component';
import { ShoppingCartStatusComponent } from './shopping-cart-status/shopping-cart-status.component';

@NgModule({
  declarations: [
    AppComponent,
    WithStatusComponent,
    WithoutStatusComponent,
    ConfirmationAlertComponent,
    ImageContainerComponent,
    ShoppingCartStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
