import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
    public user:firebase.User | undefined = undefined;
    private user$:Subject<firebase.User> = new Subject();
    private load$:Subject<boolean> = new Subject();

  constructor( private authFire:AngularFireAuth, private router:Router ) {
    
    this.authFire.onAuthStateChanged(user => {
      if (user) {
        this.user = user!;
        this.user$.next(this.user);
        if (router.url.split('#')[0] == '/'){
          router.navigate(["/home"]).then(() => {
            this.load$.next(true);
            window.location.reload()
          });
        }
      }else {
        if (router.url.split('#')[0] != '/'){
          router.navigate(["/"]).then(() => {
            this.load$.next(true);
            window.location.reload()
          });
        }
      }
      this.load$.next(false);
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
      this.load$.next(true);
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
      this.load$.next(true);
      this.user = undefined;
      window.location.reload();
    }).catch((error)=>{
      console.error(error);
    })
  }

  getUser$():Observable<firebase.User>{
    return this.user$.asObservable();
  }

  getLoad$():Observable<boolean>{
    return this.load$.asObservable();
  }

  updatePhoto(file:File){
    let storage = firebase.storage();
    storage.ref("photosProfile/"+this.user?.uid+".jpg").put(file).then(() => {
      storage.ref("photosProfile/"+this.user?.uid+".jpg").getDownloadURL().then((url) => {
        firebase.auth().currentUser?.updateProfile({
          photoURL: url
        }).then(() => {
          this.user = firebase.auth().currentUser!;
          this.user$.next(this.user);
        })
      })
    })
  }

  updatePassword(email:string){
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      console.log("Password reset email sent.")
    })
  }

  confirmEmail(){
    firebase.auth().currentUser?.sendEmailVerification().then(() => {
      console.log("Email verification sent.")
    })
  }

}
