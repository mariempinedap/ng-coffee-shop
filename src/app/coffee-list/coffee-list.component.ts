import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {
  coffeeList = [];

  @Output() added = new EventEmitter();

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.coffeeList = this.coffeeService.getCoffeeList();
  }

  addCoffeeToCart(coffee) { 
    this.added.emit(coffee);   
  }
}
