import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './app/security/pages/sing-up/sing-up.component';
import { SignInComponent } from './app/security/pages/sign-in/sign-in.component';


const routes: Routes = [
  { path: "sign-up", component: SingUpComponent },
  { path: "sign-in", component: SignInComponent },

  { path: "**", component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }