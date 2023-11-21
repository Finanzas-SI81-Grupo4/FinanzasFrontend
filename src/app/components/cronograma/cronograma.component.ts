import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material/table';
import { CronogramaService } from 'src/app/services/cronograma.service';
import {ActivatedRoute} from "@angular/router";
import {ClienteService} from "../../services/cliente.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit{
  cronogrma_id!: number;
  cliente_id!: number;
  isChecked = true;
  monedas!: string;

  pintar!:string;

  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  moneda_value!: number;
  displayedColumns: string[] = [
    'numeroDeCuota',
    'fechaDePago',
    'saldoInicial',
    'amortizacion',
    'interes',
    'seguroDesgravamen',
    'seguroVehicular',
    'portes',
    'costosRegistrales',
    'costosNotariales',
    'cuota',
    'saldoFinal',
    'flujo'
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cronogramaService: CronogramaService,
              private activated: ActivatedRoute,
              private clienteService: ClienteService,
              private _formBuilder: FormBuilder) { }

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }

  ngOnInit(): void {
      this.getCronogramaList();
      this.moneda();
  }

  moneda(){
    if(this.isChecked){
      this.moneda_value = 1;
    }else{
      if(this.monedas == "DOLARES"){
        this.moneda_value = 3.73;
        this.pintar = "SOLES";
      }else{
        this.moneda_value = 1 / 3.73;
        this.pintar = "DOLARES";
      }
    }
  }
  cambios(){
    if(this.pintar == "DOLARES"){
      if(this.isChecked){
      this.pintar = "SOLES";
      }else this.pintar = "DOLARES";
    }
    else{
      if(this.isChecked){
        this.pintar = "DOLARES";
      }else this.pintar = "SOLES";
    }
  }




  getCronogramaList() {
    this.cronogrma_id = this.activated.snapshot.params['id'];
    this.cliente_id = this.activated.snapshot.params['id_cliente'];


    console.log("Este es el id cronograma",this.cronogrma_id);
    console.log("Cliente id",this.cliente_id);

    this.clienteService.get_cronograma_cliente(this.cliente_id,this.cronogrma_id).subscribe({
      next: (res) => {
        this.monedas = res.informacion.monedas[0].nombre;
        this.pintar = this.monedas;




        if (res.cuotas) {
          const cuotasArray = res.cuotas;


          this.dataSource = new MatTableDataSource(cuotasArray);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          console.error('Formato invalido');
        }
      },
      error: console.error,
    });
  }


}
