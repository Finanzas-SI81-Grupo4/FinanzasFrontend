import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';


import {HomeComponent} from "./components/home/home.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ClientesComponent } from './components/clientes/clientes.component';

import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';



const routes: Routes = [
  { path: "sign-up", component: SignUpComponent },
  { path: "sign-in", component: SignInComponent },
  {path:"home", component:HomeComponent },
  { path: "cotizar", component: CalculatorComponent },
  { path: "catalogo", component: CatalogoComponent },
  { path: "clientes", component: ClientesComponent },

  { path: "cotizaciones/:id", component: CotizacionesComponent },
  { path: "cronograma/:id/cliente/:id_cliente", component: CronogramaComponent },
  { path: "**", component: SignInComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
