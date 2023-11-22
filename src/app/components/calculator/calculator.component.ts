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
  customerId!: number;

  constructor(private cronogramaService: CronogramaService,private router: Router,private activated: ActivatedRoute) {
  }

  ngOnInit() {
    this.customerId = this.activated.snapshot.params['customerId'];
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
      this.router.navigate(['/cotizaciones', this.customerId]);
  }

  logout() {
    sessionStorage.removeItem('userid');
  }
}
