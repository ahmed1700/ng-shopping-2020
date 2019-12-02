import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-from',
  templateUrl: './product-from.component.html',
  styleUrls: ['./product-from.component.css']
})
export class ProductFromComponent implements OnInit {
  product = {}
  categories$;
  id = '';
  constructor(
    private catgServices: CategoryService,
    private productsServices: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productsServices.getProductByKey(this.id).subscribe(product => {
        this.product = product
      })
    }
  }

  ngOnInit() {
    this.categories$ = this.catgServices.getCategories();
  }
  save(product) {
    if (this.id) {
      this.productsServices.updateProduct(this.id, product);
    }
    else {
      this.productsServices.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

}
