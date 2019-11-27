import { User } from 'firebase/app';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{


  constructor (
    private auth: AuthService) { }

  canActivate(){
    return this.auth.AppUser.pipe(map(appUser => appUser.isAdmin ));
  }
 
}
