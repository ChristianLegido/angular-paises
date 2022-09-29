import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';//nos deja recibir y enviar un Observable


import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country[];

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    
    //Opcion más asequible
    this.activatedRoute.params
    .pipe(
      switchMap( ( {id} )  => this.paisService.getPaisPorAlpha( id )),
      tap(console.log)
    )
    .subscribe (pais => {
      this.pais = pais.shift();
    });


  }

}
