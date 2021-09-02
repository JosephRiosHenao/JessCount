import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
    public user:User = {
      uid: "Error",
      avatar: "assets/img/default-user.png",
      username: "Usuario",
      email: "user@gmail.com",
      country: "Desconocido",
      city: "Desconocido",
      phone: "Desconocido",
      address: "Desconocido"
    };

    public userFire:firebase.User | undefined = undefined;
    private user$:Subject<User> = new Subject();
    private load$:Subject<boolean> = new Subject();

  constructor( private authFire:AngularFireAuth, private router:Router, private http:HttpClient ) {

    
    this.authFire.onAuthStateChanged(user => {
      if (user) {
        this.userFire = user!;
        let uid:string = user.uid
        // let uid:string = "XDaxDE"
        
        user.getIdToken().then((token) => { 
          console.log("tokenID: " + token); 
          http.get("https://jesscount-1bff0-default-rtdb.firebaseio.com/users/"+uid+"/user.json?auth="+token).subscribe((data:any) => {
            
            if (data === null) {
              console.log("No data")
              router.navigate(["/welcome"])  
              
            } else {
              this.user = data;
              console.log(this.user)
              this.user$.next(this.user);
            }

          })
        }); 

        
        
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
      setTimeout(() => {
        this.load$.next(false);
      },500)
    })

  }

  changeLoad(state:boolean){
    this.load$.next(state);
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
      this.user = {
        uid: "Error",
        avatar: "assets/img/default-user.png",
        username: "Usuario",
        email: "user@gmail.com",
        country: "Desconocido",
        city: "Desconocido",
        phone: "Desconocido",
        address: "Desconocido"
      };
      window.location.reload();
    }).catch((error)=>{
      console.error(error);
    })
  }

  getUser$():Observable<User>{
    return this.user$.asObservable();
  }

  getLoad$():Observable<boolean>{
    return this.load$.asObservable();
  }

  updatePhoto(file:File){
    let storage = firebase.storage();
    storage.ref("photosProfile/"+this.user.uid+".jpg").put(file).then(() => {
      storage.ref("photosProfile/"+this.user.uid+".jpg").getDownloadURL().then((url) => {
        firebase.auth().currentUser?.updateProfile({
          photoURL: url
        }).then(() => {
          // this.user = firebase.auth().currentUser!;
          // this.user$.next(this.user);
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

  updateData(data:any){
    // let tel = data.tel != "" || data.tel != null ? data.tel : null;
    // let name = data.name != "" || data.name != null ? data.name : null;

    // firebase.auth().currentUser?.updatePhoneNumber(tel).then(() => {
    //   console.log("Phone number updated.");
    // })

    // firebase.auth.PhoneAuthProvider.credential().signInMethod
    //   // verification code from user
    //   var cred = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);

    
  }

}


// base de datos creada, cambiar uso de informacion

