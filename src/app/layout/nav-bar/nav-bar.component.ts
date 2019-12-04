import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Iuser } from 'src/app/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 shoppingCartCounter;
  appUser : Iuser;
  constructor(private auth: AuthService , 
    private cartServices : ShoppingCartService) {
    this.auth.AppUser.subscribe(appuser=> this.appUser=appuser);
  }

  ngOnInit() {
    this.cartServices.getCart().valueChanges().subscribe((cart:any)=>{
      this.shoppingCartCounter =0;
       for (const productId in cart.items) {
          
            this.shoppingCartCounter += cart.items[productId].quantiy;
         }
    })
  }
  logOut() {
      this.auth.logOut();
  }

}
