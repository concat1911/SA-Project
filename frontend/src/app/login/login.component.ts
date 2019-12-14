import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username = 'linhtinh'
  password = '12345678'
  status = ''
  isvalid = false
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  onLogin () {
    if(this.username === 'linhtinh' && this.password === '12345678'){
      this.status = 'Welcome back'
      this.isvalid = true
      this.router.navigate(['welcome', this.username] )
    }else{
      this.status = 'Invalid username or password'
    }
  }
}
