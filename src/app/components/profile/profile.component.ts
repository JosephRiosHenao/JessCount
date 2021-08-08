import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import firebase from 'firebase';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: firebase.User;
    // name: 'Joseph Rios Henao',
    // email: 'joseph232005@gmail.con',
    // tel: '+55 (11) 99876-8787',
    // address: 'Rua do Cemitério, 645',
    // image: 'https://avatars3.githubusercontent.com/u/147914?v=3&s=460',
    // emailVerified: true,
    // location: 'Brazil, Rio de Janeiro'


  constructor( private accountService:AccountService, private changeDetector:ChangeDetectorRef) {
    // this.user.
    this.user = this.accountService.user!;
    this.accountService.getUser$().subscribe((user) => {
      this.user = user;
      changeDetector.detectChanges();
    })
  }
  
  ngOnInit(): void {

  }

}
