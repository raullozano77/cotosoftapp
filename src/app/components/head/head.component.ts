import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'headComponent',
  templateUrl: './head.component.html'
}

) export class HeadComponent implements OnInit {
  public app_name: string = "CotoSoft";
  public isLogged: boolean = true;

  constructor(public _authS: AuthService) {  }

  // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {  }

  salir() {
    this._authS.logout();
  }

}
