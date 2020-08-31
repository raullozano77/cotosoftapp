import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private _authS: AuthService, private router: Router) { }

  /*   canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean {
      console.log("Entró a AuthGuard");
      return this._authS.isLogged();
    }
   */
  canActivate() {
    // If the user is not logged in we'll send them back to the home page
    //console.log(this._authS.isLogged());

    if (!this._authS.isLogged()) {
      //console.log('No estás logueado');
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }

}
