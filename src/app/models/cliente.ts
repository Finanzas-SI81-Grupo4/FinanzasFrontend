export interface Cliente {
    id: number,
    name: string,
    lastName: string,
    dni: string,
    email:string,
    password: string
}
export interface Cuota {
  id: number;
  numeroDeCuota: number;
  fechaDePago: string;
  saldoInicial: number;
  amortizacion: number;
  interes: number;
  seguroDesgravamen: number;
  seguroVehicular: number;
  portes: number;
  costosRegistrales: number;
  costosNotariales: number;
  cuota: number;
  saldoFinal: number;
  flujo: number;
}

export interface Informacion {
  id: number;
  numeroAnios: number;
  porcentajeCuotaInicial: number;
  tipoTasaInteres: string;
  plazoTasaInteres: string;
  abreviaturaTasaInteres: string;
  porcentajeTasaInteres: number;
  capitalizacion: string;
  plazoDeGracia: string;
  tiempoPlazoDeGracia: number;
  porcentajeSeguroDesgravamen: number;
  tiempoSeguroDesgravamen: string;
  porcentajeSeguroVehicular: number;
  tiempoSeguroVehicular: string;
  portes: number;
  costosRegistrales: number;
  costosNotariales: number;
  fechaInicio: string;
  porcentajePrestamoFinanciar: number;
  montoPrestamoFinanciar: number;
  porcentajeCuotaFinal: number;
  montoCuotaFinal: number;
  frecuenciaPago: string;
  monedas: Moneda[];
}
export interface Moneda {
  id: number;
  nombre: string;
  simbolo: string;
  abreviatura: string;
}


export interface Cronograma {
  id: number;
  cuotas: Cuota[];
  customer: Cliente;
  informacion: Informacion;
  vehiculo: Vehiculo;
}
export interface Vehiculo {
  id: number;
  marca: string;
  modelo: string;
  precio: number;

}
