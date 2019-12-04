import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { take } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }
  public getCart() {
    const cartId = this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
  }
  public getItem(cartId, productId) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }
  private getOrCreateCartId() {
    // get cart ID from local storage 
    const cartID = localStorage.getItem('cartId');
    if (cartID) return cartID;
    // if cart is not exist ==> create collection of shopping cart 
    const result = this.create();
    // set in cart ID to local storage 
    localStorage.setItem('cartId', result.key);
    return result.key;
  }
  public addToCart(product) {
    this.updateItemQuantity(product, 1);
  }
  public removeFromCart(product) {
    this.updateItemQuantity(product, -1);
  }
  private async updateItemQuantity(product, change) {
    const cartId = this.getOrCreateCartId();
    console.log(cartId);
    const item$ = this.getItem(cartId, product.key);
 
    
    //3 : update items 
    item$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {
      if (item.payload.exists()) {
        item$.update({ quantiy: item.payload.val().quantiy + change })
      }
      else {
        item$.update({
          product: {
            title: product.payload.val().title,
            price: product.payload.val().price,
            category: product.payload.val().category,
            imageUrl: product.payload.val().imageUrl,
          }, quantiy: 1
        })
      }
    })
  }

}
