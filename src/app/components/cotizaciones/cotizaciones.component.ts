import { Component, OnInit } from '@angular/core';
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

  displayedColumns: string[] = ['cliente_id','marca','modelo','moneda','ncuotas',
  'precio','pgracia','tasa','pcuotainicial','id','accion'];
  dataSource!: MatTableDataSource<any>;

    constructor(private cronogramaService: CronogramaService, private activated: ActivatedRoute) { }

    ngOnInit(): void {
      this.getCotizacionesIdList();
    }

    getCotizacionesIdList(){
      this.cliente_id = this.activated.snapshot.params['id'];
      this.cronogramaService.getCronogramasByClientId(this.cliente_id).subscribe({
        next:(res)=>{
          this.dataSource=new MatTableDataSource(res);
          console.log("Inserto",res)
        },
        error:console.log,
      });
    }

}
