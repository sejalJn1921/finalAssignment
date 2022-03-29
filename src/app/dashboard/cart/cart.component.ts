import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  data_in_cart:any;
  subscription: Subscription | undefined;

  @Input() product = [];

  constructor(public router: Router, private data: DataService) { }
  onHome(){
    this.router.navigate(['/home'])
  }

  removeFromCart(key: string){
    let temp = [...this.data_in_cart];
    let index = this.data_in_cart.findIndex((el:any) => el.Name == key)
    if(index > -1){
      //element exist
      temp.splice(index, 1);
    }
    this.data.addToCart(temp);
  }

  ngOnInit(){
      this.subscription = this.data.currentCart.subscribe(newData => {
this.data_in_cart = newData
      })
  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

 
}
