import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import {SignInServiceService} from "../../../services/sign-in-service.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  hide: boolean = true;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signInService: SignInServiceService // Inyecta el servicio en el constructor
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }

    const username = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.signInService.login(username, password).subscribe(
      (response) => {
        // Manejar la respuesta del backend para el inicio de sesión, por ejemplo, guardar el token JWT.
        console.log(response);
      },
      (error) => {
        // Manejar errores de inicio de sesión, por ejemplo, mostrar un mensaje de error.
        console.error(error);
      }
    );
  }



}
