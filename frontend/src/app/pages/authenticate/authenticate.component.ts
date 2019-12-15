import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  email = ''
  password = ''
  status = ''
  constructor(private router: Router, private authService: AuthenticateService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.authService.checkLogin(this.email, this.password)){
      sessionStorage.setItem('authenticatedUser', this.email)
      this.router.navigate(['welcome', this.email])
    }else{
      this.status = 'Invalid Credentials'
    }
  }
}
