import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public fireauth:AngularFireAuth, private router:Router) { }
   
   login(email:string ,password:string){
     this.fireauth.signInWithEmailAndPassword(email,password).then( ()=>{
      localStorage.setItem('token', 'true'); 
      this.router.navigate(['/home'])
     }, err =>{
        alert(err.message);
        this.router.navigate(['/login']);
     })
   }


   register(email:string ,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( ()=>{
     alert('Registeration Successful'); 
     this.router.navigate(['/login'])
    }, err =>{
       alert(err.message);
       this.router.navigate(['/register']);
    })
  }

    logout(){
      this.fireauth.signOut().then( ()=>{
       localStorage.removeItem('token');
       this.router.navigate(['/login']);
      }, err =>{
        alert(err.message);
      })
    }

  }

