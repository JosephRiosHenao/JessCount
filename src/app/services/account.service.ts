import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor( private authFire:AngularFireAuth, private router:Router ) { }

  public user:firebase.auth.UserCredential | undefined;

  loginEmail(email:string, pass:string){
    this.authFire.signInWithEmailAndPassword(email,pass).then((user)=>{
      return true;
    }).catch((error)=>{
      console.error(error);
    })
  }

  loginWithGoogle(){
    this.authFire.signInWithPopup( new firebase.auth.GoogleAuthProvider ).then((user)=>{
      this.user = user;
      this.router.navigate(['/home']);
      console.log(user);
    }).catch((error)=>{
      console.error(error);
    })  
  }

  registerEmail(email:string, pass:string){
    this.authFire.createUserWithEmailAndPassword(email,pass).then((user)=>{
      this.user = user;
    }).catch((error)=>{
      console.error(error);
    })  
  }

  logOut(){
    this.authFire.signOut().then(()=>{
      this.user = undefined;
      this.router.navigate(['/']);
    }).catch((error)=>{
      console.error(error);
    })
  }

}
