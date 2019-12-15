import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  checkLogin(email, password){
    if(email === 'linhtinh' && password === '12345'){
      return true
    }else{
      return false
    }
  }

  checkAlreadyLogin(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null) 
  }
}
