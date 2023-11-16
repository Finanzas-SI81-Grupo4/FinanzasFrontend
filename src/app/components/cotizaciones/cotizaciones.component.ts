import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material/table';
import { CronogramaService } from 'src/app/services/cronograma.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit{

  cliente_id!: number;
  marca!: String;
  modelo!: String;
  moneda!: number;
  ncuotas!: number;
  precio!: number;
  pgracia!: String;
  tasa!: String;
  pcuotainicial!: String;
  id!: number;
  
  displayedColumns: string[] = ['cliente_id','marca','modelo','moneda','ncuotas',
  'precio','pgracia','tasa','pcuotainicial','id','accion'];
    dataSource!: MatTableDataSource<any>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    constructor(private cronogramaService: CronogramaService, private activated: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.cliente_id = this.activated.snapshot.params['id'];
      this.cronogramaService.getCronogramasByClientId(this.cliente_id).subscribe(
        (data: any) => {
          this.cliente_id = data.cliente_id;
          this.marca = data.marca;
          this.modelo = data.modelo;
          this.moneda = data.moneda;
          this.ncuotas = data.ncuotas;
          this.precio = data.precio;
          this.pgracia = data.pgracia;
          this.tasa = data.tasa;
          this.pcuotainicial = data.pcuotainicial;
          this.id = data.id;
        }
      )
    }
  
}
