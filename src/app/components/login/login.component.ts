import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  formLogin:FormGroup | undefined;
  formRegister:FormGroup | undefined;

  public loginState:boolean = true;

  constructor( private formsBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.createForms();
  }

  createForms(){
    this.formLogin = this.formsBuilder.group({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      pass : ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
    
    this.formRegister = this.formsBuilder.group({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      pass : ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

}
