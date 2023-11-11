import { Component } from '@angular/core';
import {Cronograma} from "../../models/Cronograma";
import {CronogramaService} from "../../services/cronograma.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  cronograma: Cronograma = new Cronograma();
  customerId: number = 1; // Reemplaza con el valor correcto

  constructor(private cronogramaService: CronogramaService) {}

  enviarDatos(): void {
    this.cronogramaService
      .calcularCronograma(this.customerId, this.cronograma)
      .subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.error('Error al enviar datos:', error);
        }
      );
  }
}
