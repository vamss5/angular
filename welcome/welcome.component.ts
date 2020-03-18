import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 
  welcomemessage="welcome to login page"
  name='Hostels inn'
  //activatedroute
  
 constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.welcomemessage)
    console.log(this.route.snapshot.params['name'])
  }

}
