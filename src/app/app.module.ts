import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppRoutingModule } from './/app-routing.module';
import { CoffeeService } from './coffee.service';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
