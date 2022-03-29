import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { DocumentData } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  cart: any;
  subscription: Subscription | undefined;
  constructor(
    public authentication: AuthenticationService,
    public firestore: Firestore,
    public router: Router,
    private location: Location,
    private data: DataService
  ) {
    this.db = firestore;
  }

  onRoute(subCategory: any) {
    this.router.navigate(['/products'], {
      state: { subCategory: subCategory, category: this.stateData.category },
    });
  }
  logout() {
    this.authentication.logout();
  }
  
  inCart() {
    this.router.navigate(['/cart']);
  }
  onHome() {
    this.router.navigate(['/home']);
  }

  Data: DocumentData = {};
  db: Firestore;
  prod: any = [];
  flag: boolean = true;
  stateData!: any;
  Content: DocumentData = {};

  async ngOnInit() {
    const coll = collection(this.db, 'Categories');
    collectionData(coll).subscribe((data) => {
      this.stateData = this.location.getState();
      this.Data = data[0]?.[this.stateData.category];

      let temp = {};

      let values = Object.values(this.Data);

      let entries1 = Object.values(values[0]);
      let entries2 = Object.values(values[1]);

      entries1.forEach((el: any) => {
        //@ts-ignore
        temp[el.Name] = el;
      });

      entries2.forEach((el: any) => {
        //@ts-ignore
        temp[el.Name] = el;
      });

      console.log('TEM ', temp);

      this.Content = temp;
      console.log('THIS CONTENT AND DATA ', this.Data);
    });

    this.subscription = this.data.currentCart.subscribe(
      (cart) => (this.cart = cart)
    );
  }

  addtoCart(key: string) {
    console.log('KEY ', key);
    this.data.addToCart([...this.cart, this.Content[key]]);
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
