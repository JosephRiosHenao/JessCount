import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';


@Component({
  selector: 'app-navbar-side',
  templateUrl: './navbar-side.component.html',
  styleUrls: ['./navbar-side.component.scss']
})
export class NavbarSideComponent implements OnInit {
  sidebar: any;
  closeBtn: any;
  searchBtn: any;

  nameUser:string = "Usuario";

  public user: firebase.auth.UserCredential | undefined;;

  constructor( public router:Router, private account:AccountService, private accountService:AccountService ) { 
    
    
    
  }
  
  ngOnInit(): void {
    this.user = this.accountService.user;
    if (this.user){
      this.nameUser = this.user.user?.displayName!;
    }
    
      this.sidebar = document.querySelector(".sidebar");
      this.closeBtn = document.querySelector("#btn");
      this.searchBtn = document.querySelector(".bx-search");


      this.accountService.getUser$().subscribe((user) => {
        this.user = user;

        // console.log("LOCAL "+this.user);
        // if (user.user?.displayName != "" && user.user?.displayName != undefined || user.user?.displayName == null) {
        //   this.nameUser = "UsuarioXDE";
        // } else {
        // }
        this.nameUser = user.user?.displayName!;
      })

  }

  open(){
    this.sidebar?.classList.toggle("open");
    this.menuBtnChange();
    console.log(this.router.url)
  }

  menuBtnChange(){
    if(this.sidebar?.classList.contains("open")){
      this.closeBtn?.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    }else {
      this.closeBtn?.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
  }

  logOut(){
    this.account.logOut();
  }



// closeBtn.addEventListener("click", ()=>{
//   sidebar.classList.toggle("open");
//   menuBtnChange();//calling the function(optional)
// });

// searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
//   sidebar.classList.toggle("open");
//   menuBtnChange(); //calling the function(optional)
// });

// // following are the code to change sidebar button(optional)
// function menuBtnChange() {
//  if(sidebar.classList.contains("open")){
//    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
//  }else {
//    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
//  }
// }


}
