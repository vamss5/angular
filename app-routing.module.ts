import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListhosComponent } from './listhos/listhos.component';
import { RegisComponent } from './regis/regis.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Loginpage',component:LoginComponent},
  {path:'afterlogin',component:AfterloginComponent },
  {path:'welcome/:name',component:WelcomeComponent},
  {path: 'regis',component:RegisComponent},
  {path:'**',component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
