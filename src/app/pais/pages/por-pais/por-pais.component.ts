import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string= ''
  hayError: boolean = false;
  paises: Country[] = [];

  
  constructor(private paisService: PaisService) { }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

    //Para lanzar un Observable es necesario estar subscrito
    //aparte aqui estamos manejando los diferentes errores
    this.paisService.buscarPais( this.termino )
    .subscribe( (paises) => {
      console.log(paises);
      this.paises = paises; 
    }, (err) => {
      this.hayError = true;
      //con esto purgamos lo paises en caso de error "Abajo"  
      this.paises = [];
    });
  }

  sugerencias( termino: string ){
    this.hayError = false;
    //TODO: Crear sugerencias
    
  }

}
