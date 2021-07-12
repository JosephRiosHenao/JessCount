import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-side',
  templateUrl: './navbar-side.component.html',
  styleUrls: ['./navbar-side.component.scss']
})
export class NavbarSideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sidebar = document.querySelector(".sidebar");
  closeBtn = document.querySelector("#btn");
  searchBtn = document.querySelector(".bx-search");

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
