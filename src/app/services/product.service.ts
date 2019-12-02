import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAllProduts() {
    return this.db.list('/products').snapshotChanges();
  }
  getProductByKey(productKey:string){
   return this.db.object('/products/' + productKey).valueChanges();
  }
  updateProduct(productKey: string , product){
    return this.db.object('/products/'+ productKey).update(product);
  }
  deleteProduct(productKey: string)
  {
    return this.db.object('/products/'+ productKey).remove();
  }

}
