import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-loading-control',
  templateUrl: './loading-control.component.html',
  styleUrls: ['./loading-control.component.scss']
})
export class LoadingControlComponent implements OnInit {

  public loading:boolean = true;


  constructor(  public accountSevice:AccountService, private changeDetector: ChangeDetectorRef){
    accountSevice.getLoad$().subscribe((state) => {
        this.loading = state;
        changeDetector.detectChanges();

    })
  }

  ngOnInit(): void {
  }

}
