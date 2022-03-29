import { Component, OnDestroy, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductServiceService } from 'src/app/product-service.service';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Pipe } from '@angular/core'; 
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  cart:any;
  subscription: Subscription | undefined;

  constructor(
    public authentication: AuthenticationService,
    public firestore: Firestore,
    private location: Location,
    public router: Router,
    private data: DataService
  ) {
    this.db = firestore;
  }

  logout() {
    this.authentication.logout();
  }
  inWishlist(){
    this.router.navigate(['/wishlist'])
  }
  inCart(){
    this.router.navigate(['/cart'])
  }
  onHome(){
    this.router.navigate(['/home'])
  }
  addWishlist(){

  }
  addtoCart(key: string){
 
 
   this.data.addToCart([...this.cart, this.Data[key]]) 
  }
  Data: DocumentData = {};
  db: Firestore;
  prod: any = [];
  flag: boolean = true;
  stateData!: any;
  toSearch:string ="";

  async ngOnInit() {
    const coll = collection(this.db, 'Categories');
    this.stateData = this.location.getState();
    collectionData(coll).subscribe((data) => {
      this.Data =
        data[0]?.[this.stateData.category]?.[this.stateData.subCategory];
        
      
      
    });
    
    this.subscription = this.data.currentCart.subscribe(cart => this.cart = cart)
  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

 
}
