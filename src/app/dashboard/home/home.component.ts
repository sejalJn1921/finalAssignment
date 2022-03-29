import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { DocumentData } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  cart:any;
  subscription: Subscription | undefined;
  constructor(
    public authentication: AuthenticationService,
    public firestore: Firestore,
   public router: Router,
    private data: DataService
  ) {
    this.db = firestore;
  }

  logout() {
    this.authentication.logout();
  }
  Data: DocumentData = {};
  Content:DocumentData={};
  db: Firestore;
  prod : any= [];
  flag:boolean = true;
  

  async ngOnInit() {
    const coll = collection(this.db, 'Categories');
    collectionData(coll).subscribe((data) => {
         this.Data = data[0]; 
        
      let test = data[0]["Clothes"]["Women's"];
      let entries = Object.entries(test);
      let temp = {};
      entries.forEach((et:any) => {
        //@ts-ignore  
        temp[et[1].Name] = et[1];
      })
      
      let entriesForMen = Object.entries(data[0]["Clothes"]["Men's"]);
      entriesForMen.forEach((et:any) => {
        //@ts-ignore  
        temp[et[1].Name] = et[1];
      })
      
      let entries2 = Object.entries(data[0]["Electronics"]["Laptops"]);
      entries2.forEach((et:any) => {
        //@ts-ignore  
        temp[et[1].Name] = et[1];
      })
      
      let entries3 = Object.entries(data[0]["Electronics"]["Mobile Phones"]);
      entries3.forEach((et:any) => {
        //@ts-ignore  
        temp[et[1].Name] = et[1];
      })

   let entries4 = Object.entries(data[0]["Home Appliances"]["Home Decor"]);
      entries4.forEach((et:any) => {
        //@ts-ignore  
        temp[et[1].Name] = et[1];
      })
      
      let entries5 = Object.entries(data[0]["Home Appliances"]["Kitchen & Dining"]);
      entries5.forEach((et:any) => {
        //@ts-ignore  
        temp[et[1].Name] = et[1];
      })
        
      this.Content = temp;
     
      
    });
    
    this.subscription = this.data.currentCart.subscribe(cart => this.cart = cart)
  }
  onRoute(item:string){
   
    this.router.navigate(['/categories'], { state: {'category': item } });
  }
  onHome(){
    this.router.navigate(['/home'])
  }
  inWishlist(){
    this.router.navigate(['/wishlist'])
  }
  inCart(){
    this.router.navigate(['/cart'])
  }

  addtoCart(key: string){
  
  console.log("KEY ", key)
   this.data.addToCart([...this.cart, this.Content[key]]) 
  }
  
  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }
}
