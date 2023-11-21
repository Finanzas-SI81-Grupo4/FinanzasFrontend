import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material/table';
import { CronogramaService } from 'src/app/services/cronograma.service';
import {ActivatedRoute} from "@angular/router";
import {ClienteService} from "../../services/cliente.service";

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit{
  cronogrma_id!: number;
  cliente_id!: number;

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
              private clienteService: ClienteService) { }

  ngOnInit(): void {
      this.getCronogramaList();
  }
  getCronogramaList() {
    this.cronogrma_id = this.activated.snapshot.params['id'];
    this.cliente_id = this.activated.snapshot.params['id_cliente'];


console.log("Este es el id cronograma",this.cronogrma_id);
console.log("Cliente id",this.cliente_id);

    this.clienteService.get_cronograma_cliente(this.cliente_id,this.cronogrma_id).subscribe({
      next: (res) => {
        const cuotasArray = res.map((item: any) => item.cuotas).flat();

        this.dataSource = new MatTableDataSource(cuotasArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        console.log("Aui son las cuostas", this.dataSource)
      },
      error: console.log,
    });
  }

}
