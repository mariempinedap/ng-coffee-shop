import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CoffeeService } from '../coffee.service';

interface Order {
  name: string;
  quantity: number;
  price: number;
  discount: number;
  tax: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  finalOrder:  Order[] = [];
  sumPrice = 0;
  discount=0;
  tax = 0;
  total = 0;
  message="";
  
  @Input() orderList = [];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {

    for (let o of this.orderList) {
      let exists = this.finalOrder.find( ({ name }) => name === o.name );
      if (exists) {
        exists.quantity++;
        exists.price += o.price;
      } else {
        let order: Order = {
        name : o.name,
        quantity : 1,
        price : o.price,
        discount : o.discount,
        tax : o.tax_percent
        }
        this.finalOrder.push(order);
      }
    }
  }

  calculateSumPrice() {
   this.sumPrice = _.sumBy(this.finalOrder, 'price');
    return this.sumPrice;
  }

  calculateDiscount() {
    if (this.discount===0){
      for (let o of this.finalOrder) {
        this.discount += o.price*o.discount/100;
      }
    }
     return this.discount;
   }

  calculateTax() {
    if (this.tax===0){
      for (let o of this.finalOrder) {
        this.tax += o.price*o.tax/100;
      }
    }
    return this.tax;  
   }

  calculateTotal() {
    if (this.total===0){
      this.total = this.sumPrice - this.discount + this.tax;   
    }
    return this.total;
   }

   doCancel() {
    this.coffeeService.doCheckout = false;
    this.message="";
   }

   goToPayment() {
    this.message= "YOUR ORDER WILL BE READY SOON!";
   }

   

}
