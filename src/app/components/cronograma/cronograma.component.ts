import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material/table';
import { CronogramaService } from 'src/app/services/cronograma.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit{
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

  constructor(private cronogramaService: CronogramaService, private activated: ActivatedRoute) { }

  ngOnInit(): void {
      this.getCronogramaList();
  }
  getCronogramaList() {
    this.cliente_id = this.activated.snapshot.params['id'];

    this.cronogramaService.getCronogramasByClientId(this.cliente_id).subscribe({
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
