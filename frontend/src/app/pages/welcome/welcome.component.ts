import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  step = 0

  constructor(private api:ApiServiceService) { }
  
  ngOnInit() {
    // this.api.getdummy().subscribe(res => {
    //   console.log(res)
    // }, error => {
    //   console.log(error)
    // })
  }

}
