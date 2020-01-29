import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private apiClient: HttpClient
  ) { }

  getdummy(){
    return this.apiClient.get('https://jsonplaceholder.typicode.com/todos/');
  }
}
