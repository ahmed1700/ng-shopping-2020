import { Iuser } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { User} from "firebase/app";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user:User ){
    this.db.object('/users/'+ user.uid).update({
      name : user.displayName ,
      email : user.email
    });
  }
  getUserInfo(uid:string): AngularFireObject<Iuser>{
    return  this.db.object('/users/'+ uid);
  }
}
