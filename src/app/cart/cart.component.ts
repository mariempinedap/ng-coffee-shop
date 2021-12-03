import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderIndex = 0;

  @Input() orderList = [];
  @Output() deleted = new EventEmitter();

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {}

  deleteOrder(orderIndex) {
    this.deleted.emit(orderIndex);
  }

  doCheckout(){
   this.coffeeService.doCheckout = true;
  }
}

