import { Injectable } from '@angular/core';
import {User, UsersService} from './users.service';


@Injectable({
  providedIn: 'root'
})
export class AutentificationService {
  loggedIn: boolean = false;
  connectedUser: User = null;

  constructor(private usersService: UsersService) { }
  isAutenticated(): any{
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 1000);
      }
    );
    return promise;
  }
  login(email: string = '', pwd: string = ''): any{
    this.connectedUser = this.usersService.getUserByEmailAndPass(email, pwd);
    if (this.connectedUser){
      this.loggedIn = true;
    }else {
      this.loggedIn = false;
    }
    // this.loggedIn = this.connectedUser ? true : false;
  }

  logout(){
    this.loggedIn = false;
    this.connectedUser = null;
  }
}
