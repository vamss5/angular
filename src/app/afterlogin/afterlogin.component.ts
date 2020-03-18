import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent implements OnInit {
 username='angular'
 password='qwerty'

  constructor(private router:Router) { }

  ngOnInit() {
  }
handlelogin()
{
  //console.log(this.username);
  this.router.navigate(['welcome',this.username])
} 
}
