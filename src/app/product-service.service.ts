import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private firestore: AngularFirestore) { 
   
  }
  getProducts(){
    return this.firestore.collection('Collection').snapshotChanges()
  }
}
