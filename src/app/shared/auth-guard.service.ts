import { Injectable } from '@angular/core';
import { CanActivate, Router  , RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  // 1 : route ? user  ? 
  // 2 : userInfo ,
  myuser;
  constructor(private auth: AuthService, 
    private router: Router) { }

  canActivate( router,state: RouterStateSnapshot) {
    /*  this.auth.user$.subscribe(user => this.myuser = user)
      if (this.myuser) return true;
      else {
        this.router.navigate(['/login'])
      } return false;*/
    return this.auth.user$.pipe(map(user => {
      if (user) return true;
      else {
        this.router.navigate(['/login'] , {queryParams :  {returnUrl: state.url}})
      } return false
    }))
  }
}
