import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from "firebase/app";
import { Observable, of } from 'rxjs';


import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../models/user';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
    private userServices: UserService,
    private route: ActivatedRoute, private router: Router) {
    this.user$ = this.afAuth.authState;
  }
  logOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
  login() {
    // from page to page : itshare to google site --> local site to third party (google)
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  get AppUser(): Observable<Iuser> {
    return this.user$.pipe(switchMap(user => {
      if (user) {
        return this.userServices.getUserInfo(user.uid).valueChanges();
      }
      else {
        return of(null);
      }
    }))
  }

}
