import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';


import {HomeComponent} from "./components/home/home.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";


const routes: Routes = [
  { path: "sign-up", component: SignUpComponent },
  { path: "sign-in", component: SignInComponent },
  {path:"home", component:HomeComponent },
  { path: "cotizar", component: CalculatorComponent },
  { path: "**", component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
