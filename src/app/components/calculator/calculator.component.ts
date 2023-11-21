import {Component, OnInit} from '@angular/core';
import {Cronograma} from "../../models/Cronograma";
import {CronogramaService} from "../../services/cronograma.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{

  cronograma: Cronograma = new Cronograma();
  customerId!: number; // Reemplaza con el valor correcto

  constructor(private cronogramaService: CronogramaService,private router: Router,private activated: ActivatedRoute) {}

  ngOnInit() {
    this.customerId = this.activated.snapshot.params['customerId'];

    console.log('IDEDDDDD a enviar:', this.customerId);
  }

  enviarDatos(): void {


    this.cronogramaService
      .calcularCronograma(this.customerId, this.cronograma)
      .subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/cotizaciones', this.customerId]);


        },
        (error) => {
          console.error('Error al enviar datos:', error);
        }
      );
  }

  logout() {
    sessionStorage.removeItem('userid');
    console.log('FUNCIONAAAAAA');
  }
}
