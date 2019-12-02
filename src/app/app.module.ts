import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ProductFromComponent } from './admin/product-from/product-from.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTablesModule } from 'angular-datatables';
import { ProductCardComponent } from './products/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFromComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    NgbModule ,
    AngularFireModule.initializeApp(environment.firebase) ,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    CustomFormsModule ,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
