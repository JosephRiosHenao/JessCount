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
    }).catch((error)=>{
      console.error(error);
    })
  }

  loginGmail(){
    this.authFire.signInWithPopup( new firebase.auth.GoogleAuthProvider ).then((user)=>{
      this.user = user;
    })
  }

  registerEmail(email:string, pass:string){
    this.authFire.createUserWithEmailAndPassword(email,pass).then((user)=>{
      this.user = user;
    })
  }
}
