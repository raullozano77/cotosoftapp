import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//Necesario para Pasar parametros por URL
import { Router, ActivatedRoute, Params } from '@angular/router';
 import { NBA_Service } from '../../services/nba.service';
import { Team } from './nba';

@Component({
  selector: 'nbaComponent',
  templateUrl: './nba.component.html'
}

) export class NBA_Component implements OnInit {
  public titulo: string;
  public parametro;
  public data: any[] = [];
  public teams;
   public team: Team;

  constructor(
    private _nbaService: NBA_Service,
    private _http: HttpClient,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'Pagina de NBA';
    let _headers = new HttpHeaders();
    _headers = _headers.append('X-RapidAPI-Key', '');
    _headers = _headers.append('x-rapidapi-host', '');
    _headers = _headers.append('useQueryString', 'true');

console.log(_headers);

    this._http.get('https://api-nba-v1.p.rapidapi.com/teams/league/standard', { headers: _headers}).subscribe(
      (data) => {
        console.log(data);
        console.log();
        this.teams = data['api'].teams;
        console.log('Teams: ', this.teams);

      },
      (err: HttpErrorResponse) => {
        console.log(err);
        console.log('Error: ',err.message);
      },
      () => { console.log('Petición Finalizo'); }
    );

  }



  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit(
  ) {
    // Bloque de instrucciones para recoger todos los valores de la URL
/*     this._route.params.forEach((params: Params) => {
      this.parametro = params['id']
    })
    console.log('IdParam: ', this.parametro);
    this.getTeam(this.parametro) */

  }

/*   getTeam(teamId: string) {
    this._nbaService.getUser(teamId).subscribe(
      nbaFromApi => {
        console.log(nbaFromApi);
        this.team = nbaFromApi;
          (err: HttpErrorResponse) => {
            console.log(err);
            console.log(err.message);

        }
      }
    );
  }
 */
}
