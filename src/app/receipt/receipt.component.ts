import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '../product/product.component';
import { EmptyCart } from '../store/actions';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  constructor(private store: Store<{ items: []; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => (this.products = data.cart));
  }

  products: Product[] = [];
  receipt: Product[] = [];

  totalsalestaxstr;
  grandtotalstr;



  ngOnInit() {
    this.receipt = this.products;
    this.store.dispatch(new EmptyCart());
    this.getItemizedTax()    
  }

  getItemizedTax(){
    let tax = .10;
    let importtax = .05;
    let exempt = ["candy","coffee","popcorn"];
    let importtaxed = 0;
    let salestaxed = 0;
    let itemtotaltax = 0;
    let totalsalestax = 0;
    let grandtotal = 0;
    let taxprice = 0;

    this.receipt.forEach( item =>{
      salestaxed = (exempt.includes(item.type)) ? 0: item.price * tax ;
      importtaxed = item.price * importtax;
      itemtotaltax = Math.ceil((salestaxed + importtaxed)/.05) * .05;
      totalsalestax += itemtotaltax;
      item["taxprice"] = (item["price"] + itemtotaltax).toFixed(2);
      this.totalsalestaxstr = totalsalestax.toFixed(2);
      grandtotal += itemtotaltax + item.price;
      this.grandtotalstr = grandtotal.toFixed(2);
    })

  }

}
