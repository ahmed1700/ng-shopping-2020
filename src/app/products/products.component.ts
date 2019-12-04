import { ShoppingCartService } from './../services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../services/category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {


  porducts = [];
  filteredporducts;
  categories$;
  category = '';
  cart;
  Subscription: Subscription;
  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private cartServices: ShoppingCartService,
    private route: ActivatedRoute
  ) {
    this.cartServices.getCart().valueChanges()
    .subscribe(cart=>{
          this.cart = cart;
          console.log(this.cart);
    })
   }

  ngOnInit() {
    this.Subscription = this.productService.getAllProduts().pipe(switchMap(
      products => {
        this.porducts = products;
        return this.route.queryParamMap;
      }
    )).subscribe(params => {
      this.category = params.get('category');
      this.filteredporducts = (this.category) ? this.porducts.filter(p => p.payload.val().category === this.category) : this.porducts;
    });
    this.categories$ = this.categoryService.getCategories();
  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}
