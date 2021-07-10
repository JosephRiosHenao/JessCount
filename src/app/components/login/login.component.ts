import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public loginState:boolean = true;

  public email:string = "";
  public pass:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
