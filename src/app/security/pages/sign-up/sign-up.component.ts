import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { matchpassword } from './matchpassword.validator';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  hide: boolean = true;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  signUpForm: FormGroup = this.formBuilder.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    cpassword: ['', [Validators.required]],
  },
  { 
    validators:matchpassword
  })


  onRegister() {
    if (!this.signUpForm.valid) {
      return;
    }
    console.log(this.signUpForm.value);
  }

}
