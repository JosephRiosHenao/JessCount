import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor( private authFire:AngularFireAuth ) { }

  public user:firebase.auth.UserCredential | undefined;

  loginEmail(email:string, pass:string){
    this.authFire.signInWithEmailAndPassword(email,pass).then((user)=>{
      this.user = user;
      return true;
    }).catch((error)=>{
      console.error(error);
      return false;
    })
  }

  loginGmail():boolean{
    this.authFire.signInWithPopup( new firebase.auth.GoogleAuthProvider ).then((user)=>{
      this.user = user;
      return true;
    }).catch((error)=>{
      console.error(error);
      return false;
    })  
  }

  async registerEmail(email:string, pass:string):Promise<boolean>{
    this.authFire.createUserWithEmailAndPassword(email,pass).then((user)=>{
      this.user = user;
      return true;
    }).catch((error)=>{
      console.error(error);
    })  
  }
}
