import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string='';
  password : string='';
  constructor(public authentication:AuthenticationService) { }

  ngOnInit(): void {}
    login(){
      if(this.email==''){
        alert('please enter the email');
      return;
      }
      if(this.password==''){
        alert('please enter the password');
      return;
      }
      this.authentication.login(this.email,this.password);
      this.email='';
      this.password='';  
  }

  
    
  
}


