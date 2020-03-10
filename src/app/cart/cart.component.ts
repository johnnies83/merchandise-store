import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '../product/product.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(private store: Store<{ items: []; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  }

  cart: Product[] = [];
  ngOnInit() {
    console.log(this.cart)
  }

  printProduct(){
    console.log(this.cart)
  }

}
