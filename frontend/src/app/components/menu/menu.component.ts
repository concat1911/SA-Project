import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  islogin = false
  constructor(private authService: AuthenticateService) { }

  ngOnInit() {
    if(this.authService.checkAlreadyLogin()) this.islogin = true
  }

  handleLogout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
