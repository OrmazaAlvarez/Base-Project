import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithStatusComponent } from './with-status/with-status.component';
import { WithoutStatusComponent } from './without-status/without-status.component';
import { ConfirmationAlertComponent } from './confirmation-alert/confirmation-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    WithStatusComponent,
    WithoutStatusComponent,
    ConfirmationAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
