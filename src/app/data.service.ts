import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const t = {
  data: []
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private cartSource = new BehaviorSubject([]);
  currentCart = this.cartSource.asObservable();

  constructor() { }

  addToCart(newData: any) {
    this.cartSource.next(newData)
  }

}
