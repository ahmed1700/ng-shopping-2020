import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Iuser } from 'src/app/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  appUser : Iuser;
  constructor(private auth: AuthService) {
    this.auth.AppUser.subscribe(appuser=> this.appUser=appuser);
  }

  ngOnInit() {
  }
  logOut() {
      this.auth.logOut();
  }

}
