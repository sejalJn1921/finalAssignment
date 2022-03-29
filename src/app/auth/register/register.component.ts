import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email : string='';
  password : string='';
  constructor(public authentication:AuthenticationService) { }

  ngOnInit(): void {
  }
  register(){
    if(this.email==''){
      alert('please enter the email');
    return;
    }
    if(this.password==''){
      alert('please enter the password');
    return;
    }
    this.authentication.register(this.email,this.password);
    this.email='';
    this.password='';  
}

}
