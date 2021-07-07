import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public loginState:boolean = true;

  public email:string = "";
  public pass:string = "";

  constructor(private loginService:AccountService) { }

  ngOnInit(): void {
  }

  registerEmail(){
    this.loginService.loginEmail(this.email, this.pass)
  }

}
