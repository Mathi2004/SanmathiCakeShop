import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private cartService: CartService) {}

  addToCart(name: string, image: string, price: number) {
    const item = { name, image, price, quantity: 1 };
    this.cartService.addToCart(item);
    alert(name + " added to cart!");
  }
  // products = [
  //   { name: 'Chocolate', price: 500, image: 'assets/flavor/flavor1.jpeg' },
  //   { name: 'Vanilla', price: 400, image: 'assets/flavor/flavor2.jpeg' },
  //   { name: 'BlueBerry', price: 450, image: 'assets/flavor/flavor3.jpeg' },
  //   { name: 'Strawberry', price: 480, image: 'assets/flavor/flavor4.jpeg' },
  //   { name: 'Cheese Cake', price: 550, image: 'assets/flavor/flavor5.jpeg' },
  //   { name: 'Black Forest', price: 520, image: 'assets/flavor/flavor6.jpeg' }
  // ];

  // constructor(private cartService: CartService, private router: Router) {}

  // addToCart(product: any) {
  //   this.cartService.addToCart(product);
  //   alert(`${product.name} added to Cart!`);
  // }

  // goToCart() {
  //   this.router.navigate(['/cart']);
  // }
}
