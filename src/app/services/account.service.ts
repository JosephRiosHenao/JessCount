import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
    public user:firebase.auth.UserCredential | undefined;
    private user$:Subject<firebase.auth.UserCredential> = new Subject();

  constructor( private authFire:AngularFireAuth, private router:Router ) {
    this.authFire.currentUser.then((user) => {
      if (user){
        this.user?.user = user;
      }
    }).
  }

  loginEmail(email:string, pass:string){
    this.authFire.signInWithEmailAndPassword(email,pass).then((user)=>{
      return true;
    }).catch((error)=>{
      console.error(error);
    })
  }

  loginWithGoogle(){
    this.authFire.signInWithPopup(new firebase.auth.GoogleAuthProvider).then((user) => {
      this.user = user;
      this.router.navigate(['/home']);
      console.log(this.user);
      this.user$.next(this.user);
    }).catch((error) => {
      console.error(error);
    });  
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

  getUser$():Observable<firebase.auth.UserCredential>{
    return this.user$.asObservable();
  }

}
