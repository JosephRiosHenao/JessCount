import { AccountService } from './services/account.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'JessCount';
  public loading:boolean = true;


  constructor( public router:Router, public accountSevice:AccountService ){
    accountSevice.getLoad$().subscribe((state) => {
      this.toggleLoading(state);
    })
  }

  toggleLoading(state:boolean){
    this.loading = state;
    console.log(this.loading);
  }
}
