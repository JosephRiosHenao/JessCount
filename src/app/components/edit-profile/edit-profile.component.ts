import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  verified:boolean = false
  
  editProfileForm: FormGroup = new FormGroup({});

  createForm(){
    this.editProfileForm = this.formBuilder.group({
      name: [this.accountService.user?.displayName,Validators.required],
      tel: [this.accountService.user?.phoneNumber,Validators.required],
    })
  }

  constructor( public accountService:AccountService, private formBuilder:FormBuilder) {
    this.createForm()
    accountService.getUser$().subscribe((user) => {
      this.editProfileForm.setValue({
        name: user.displayName,
        tel: user.phoneNumber
      })
    })
  }
  
  ngOnInit(): void {
    this.verified = this.accountService.user?.emailVerified!;
  }
  updatePass(){
    console.log(this.accountService.user?.email!)
    this.accountService.updatePassword(this.accountService.user?.email!);
  }
  sendVefification() {
    this.accountService.confirmEmail();
  }


  exitForm(){
    this.editProfileForm.reset();
    let user:any = this.accountService.user;
    this.editProfileForm.setValue({
      name: user.displayName,
      tel: user.phoneNumber
    })
  }

  onSubmitEditProfile(){
    console.log(this.editProfileForm.value)
  }
}
