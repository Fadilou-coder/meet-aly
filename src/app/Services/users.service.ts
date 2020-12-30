import { Injectable } from '@angular/core';


export interface User {
  id: number;
  nom: string;
  prenom: string;
  role: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  private users: User[] = [
    { id: 1, nom: 'NIANG', prenom: 'Papa Djiby', email: 'ibnaliou@gmail.com', password: 'password', role: 'ADMIN' },
    { id: 2, nom: 'Mbaye', prenom: 'Mamadou', email: 'mblaye@gmail.com', password: 'passer', role: 'CLIENT' },
    { id: 3, nom: 'BA', prenom: 'Seckou', email: 'sekou@gmail.com', password: 'passer', role: 'CLIENT' },
    { id: 4, nom: 'BA', prenom: 'Seckou', email: '', password: '', role: 'CLIENT' }
  ];
  findUserById(id: number): User{
    const user = this.users.find(
      (u: User) => {
        return u.id === id;
      }
    );
    return user;
  }
  getUserByEmailAndPass(email: string, pass: string): User{
    const user = this.users.find(
      (u: User) => {
        return u.email === email && u.password === pass;
      }
    );
    return user;
  }
}
