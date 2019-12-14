import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  checkLogin(username, password){
    if(username === 'linhtinh' && password === '12345'){
      return true
    }else{
      return false
    }
  }
}
