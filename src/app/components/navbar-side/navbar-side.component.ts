import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-navbar-side',
  templateUrl: './navbar-side.component.html',
  styleUrls: ['./navbar-side.component.scss']
})
export class NavbarSideComponent implements OnInit {
  sidebar: any;
  closeBtn: any;
  searchBtn: any;

  public user: User;

  constructor( public router:Router, private account:AccountService, private accountService:AccountService ) { 
    this.user  = accountService.user;

  }
  
  ngOnInit(): void {
    
      this.sidebar = document.querySelector(".sidebar");
      this.closeBtn = document.querySelector("#btn");
      this.searchBtn = document.querySelector(".bx-search");

      this.accountService.getUser$().subscribe((user) => {
        console.log("Cuenta exitosamente cargada!");
        console.log(user);
        this.user = user;
      })
  
      
    }
    
  open(){
    this.sidebar?.classList.toggle("open");
    this.menuBtnChange();
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
