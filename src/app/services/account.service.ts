import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
    public user:firebase.User | undefined;
    private user$:Subject<firebase.User> = new Subject();

  constructor( private authFire:AngularFireAuth, private router:Router ) {
    
    this.authFire.onAuthStateChanged(user => {
      if (user) {
        this.user = user!;
        this.user$.next(this.user);
        if (router.url.split('#')[0] == '/'){
          router.navigate(["/home"]);
        }
      }else {
        router.navigate(["/"])
      }
    })

  }

  loginEmail(email:string, pass:string){
    this.authFire.signInWithEmailAndPassword(email,pass).then((user)=>{
      return true;
    }).catch((error)=>{
      console.error(error);
    })
  }

  loginWithGoogle(){
    this.authFire.signInWithPopup(new firebase.auth.GoogleAuthProvider).then(() => {
      this.authFire.onAuthStateChanged(() => window.location.reload()) 
    }).catch((error) => {
      console.error(error);
    });  
  }

  registerEmail(email:string, pass:string){
    this.authFire.createUserWithEmailAndPassword(email,pass).then((user)=>{
      // this.user = user;
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

  getUser$():Observable<firebase.User>{
    return this.user$.asObservable();
  }

}
