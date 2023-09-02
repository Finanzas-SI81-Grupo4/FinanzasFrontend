import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './app/security/pages/sign-in/sign-in.component';
import { SingUpComponent } from './app/security/pages/sing-up/sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
