import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JessCount';
  public activeNavbar:boolean = true;

  constructor( public router:Router ){
    console.log(router.url.split('#')[0])
  }
}
