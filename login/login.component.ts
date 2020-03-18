import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="angular"
  
//dependency injection
  constructor(private router:Router) { }

  ngOnInit(){
    

  }
handlelogin()
{
  //console.log(this.username);
  this.router.navigate(['afterlogin'])
} 
register()
{
  this.router.navigate(['regis'])
}
}
