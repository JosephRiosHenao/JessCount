import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  user:User;

  partFinish:boolean = false;

  constructor(private changeDetector:ChangeDetectorRef, private accountService:AccountService) { 
    this.user = this.accountService.user;
  }

  ngOnInit(): void {
    this.partFinish = false;
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
