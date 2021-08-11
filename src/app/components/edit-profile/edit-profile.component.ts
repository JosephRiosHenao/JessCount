import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  verified:boolean = false

  constructor( public accountService:AccountService) { }

  ngOnInit(): void {
    this.verified = this.accountService.user?.emailVerified!;
  }
  updatePass(){
    this.accountService.updatePassword(this.accountService.user?.email!);
  }
  sendVefification() {
    this.accountService.confirmEmail();
  }

}
