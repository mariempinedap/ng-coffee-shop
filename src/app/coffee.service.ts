import { Injectable } from '@angular/core';

@Injectable()
export class CoffeeService {
  coffeeList = [
    {
      name: 'Green Tea',
      price: 100,
      image: 'https://globalassets.starbucks.com/assets/bcca1134c29740c09d77fa0a682756be.jpg',
      discount: 10,
      tax_percent: 10
    },
    {
      name: 'Late',
      price: 120,
      image: 'https://globalassets.starbucks.com/assets/2e9d6c03b3ed4c9389c5a5f65294c22e.jpg',
      discount: 15,
      tax_percent:10
    },
    {
      name: 'Americano',
      price: 80,
      image: 'https://globalassets.starbucks.com/assets/e83ab4de679e41eb844e011d0a728bcf.png',
      discount: 0,
      tax_percent:0
    },
    {
      name: 'Sandwich',
      price: 90,
      image: 'https://globalassets.starbucks.com/assets/a03b5a0c35cf45bdbcd5308a9e7d189d.jpg',
      discount: 0,
      tax_percent:0
    },
    {
      name: 'Muffin',
      price: 30,
      image: 'https://globalassets.starbucks.com/assets/c4f94f9d170e456286414ce67a1229b0.jpg',
      discount: 9,
      tax_percent:0
    },
    {
      name: 'Croissant',
      price: 100,
      image: 'https://globalassets.starbucks.com/assets/bf385d6a1d484e88a635278b261b8456.jpg',
      discount: 0,
      tax_percent:0
    },
    {
      name: 'Sandwich and Coffee',
      price: 200,
      image: 'https://www.starbucks.cl/media/MenuLandingUberEatsV2_tcm102-44116_w1024_n.jpg',
      discount: 20,
      tax_percent:10
    }
  ];

  doCheckout = false;

  addCoffee(coffee) {
    this.coffeeList.push(coffee);
  }

  deleteCoffee(index) {
    this.coffeeList.splice(index, 1);
  }

  getCoffeeList() {
    return this.coffeeList;
  }
}
