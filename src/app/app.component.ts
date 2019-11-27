import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private userService : UserService,
    private route: ActivatedRoute, 
    private router: Router, private auth: AuthService) {

    this.auth.user$.subscribe(user => {
      if (user) {
        this.userService.save(user);
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigateByUrl(returnUrl);
      }
    })
  }
}
