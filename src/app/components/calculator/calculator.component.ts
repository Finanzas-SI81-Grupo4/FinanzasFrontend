import {Component, OnInit} from '@angular/core';
import {Cronograma} from "../../models/Cronograma";
import {CronogramaService} from "../../services/cronograma.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{

  cronograma: Cronograma = new Cronograma();
  customerId: number = 1; // Reemplaza con el valor correcto

  constructor(private cronogramaService: CronogramaService) {}

  ngOnInit() {
    // Obtén el valor del customerId desde el sessionStorage
    const userId = sessionStorage.getItem('userid');

    if (userId) {
      this.customerId = parseInt(userId, 10);
    } else {
      this.customerId = 1; // Valor predeterminado si no hay usuario en sesión
    }
  }

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

  logout() {
    sessionStorage.removeItem('userid');
    console.log('FUNCIONAAAAAA');
  }
}
