import { ProductFromComponent } from './admin/product-from/product-from.component';
import { AdminAuthGuardService } from './shared/admin-auth-guard.service';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/auth-guard.service';


const routes: Routes =
 [
  { path: '' , redirectTo: "/products"  , pathMatch : 'full'} ,
  { path: 'products' , component: ProductsComponent} ,
  { path: 'shopping-cart' , component: ShoppingCartsComponent},
  { path: 'order-success' , component: OrderSuccessComponent},
  { path: 'login' , component: LoginComponent} ,
  { path: 'admin/products' , component: AdminProductsComponent , canActivate : [AuthGuardService , AdminAuthGuardService]  } ,
  { path: 'admin/products/new' , component: ProductFromComponent , canActivate : [AuthGuardService , AdminAuthGuardService]  } ,
  { path: 'admin/products/:id' , component: ProductFromComponent , canActivate : [AuthGuardService , AdminAuthGuardService]  } ,
  { path: 'admin/orders' , component: AdminOrdersComponent , canActivate : [AuthGuardService , AdminAuthGuardService] } ,
  { path: 'my/orders' , component: MyOrdersComponent , canActivate : [AuthGuardService]} ,
  { path: '**' , component: PageNotFoundComponent} ,
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
