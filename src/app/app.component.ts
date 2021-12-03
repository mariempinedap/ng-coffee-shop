import { Component } from '@angular/core';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addedList = [];

  constructor(private coffeeService: CoffeeService) {}

  addToCart(coffee) {
    this.addedList.push(coffee);
  }

  deleteFromList(index) {
    this.addedList.splice(index, 1);
  }


}
