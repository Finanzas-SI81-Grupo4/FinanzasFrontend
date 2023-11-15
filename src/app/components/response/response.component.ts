import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit{
  displayedColumns: string[] = [
  'banco',
  'numeroCuotas',
  'cuotaMensual',
  'cuotaTotal',
  'fechaInicio',
  'fechaFinal',
  'tasaInteres',
  'van',
  'tir',
  ];
  dataSource!: MatTableDataSource<any>;

  ngOnInit(): void {}
}
