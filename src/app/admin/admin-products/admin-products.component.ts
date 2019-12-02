import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  filteredProducts;
  products: any[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private productsServices: ProductService,
    private router: Router
  ) {
    productsServices.getAllProduts().subscribe(products =>
    { 
      this.filteredProducts = this.products = products ;
      this.dtTrigger.next();
    }
    )
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }
  delete(id) {
    if (confirm('Are you sure that you want to delete this product ?')) {
      this.productsServices.deleteProduct(id);
      this.router.navigate(['/admin/products']);
    }
  }
  filter(queryStr: string) {
    console.log('key up');
    
    if (queryStr) {
      this.filteredProducts = this.products.filter(prod =>
        prod.payload.val().title.toLowerCase().includes(queryStr.toLowerCase())
      )
    }
    else {
      this.filteredProducts = this.products;
    }

  }
}

