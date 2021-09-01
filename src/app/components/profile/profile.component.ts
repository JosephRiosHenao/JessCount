import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import firebase from 'firebase';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor( private accountService:AccountService, private changeDetector:ChangeDetectorRef) {
    this.user = this.accountService.user;
  }
  
  ngOnInit(): void {
    this.user = this.accountService.user;
    this.accountService.getUser$().subscribe((user) => {
      this.user = user;
      this.changeDetector.detectChanges();
    })
  }

  changePhotoURL(e:Event){
    this.changeDetector.detectChanges();
    if (e.target != null){
      let file : File = (e.target as HTMLInputElement).files?.item(0)!;
      this.accountService.updatePhoto(file)
    }
  }

}
