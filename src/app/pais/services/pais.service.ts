import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Country } from '../interfaces/pais.interface';



@Injectable({
  providedIn: 'root'
})


export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  //Servicio Http Inyectado
  buscarPais( termino: string ): Observable<Country[]>{

    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>(url);
    // .pipe(
    //   catchError( err => of([]) )
    // );
    //El "of" es una funcion que genera observables, y en este caso cazamos el error y retornamos un array vacio
  }

  buscarCapital( termino: string ): Observable<Country[]>{

    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha( id: string ): Observable<Country>{

    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>(url);
  }
  

}
