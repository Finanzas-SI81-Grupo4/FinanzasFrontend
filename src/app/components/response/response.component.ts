import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Cronograma} from "../../models/Cronograma";
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

  cronograma  = new Cronograma;

  dataSource!: MatTableDataSource<any>;

  ngOnInit(): void {}
}
