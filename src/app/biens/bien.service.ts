import { Injectable } from '@angular/core';
import {Bien} from '../mdel';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  private biens: Bien[] = [
    // 1,2,3,4,5,6
    {id: 1, title: 'Voiture', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt sapiente voluptate quibusdam inventore tempore illum sint numquam consequatur asperiores?', price: 3000000, image: 'https://source.unsplash.com/1080x720/?car/', state: 1, category: 'Immobilier', sale: true, createAt: new Date(2020, 5, 10, 23, 59)},
    {id: 2, title: 'Ordinateur', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt sapiente voluptate quibusdam inventore tempore illum sint numquam consequatur asperiores?', price: 90000, image: 'https://source.unsplash.com/1080x720/?computer/', state: 1, category: 'Tech', sale: true, createAt: new Date(2020, 12, 1)},
    {id: 3, title: 'Clavier', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt sapiente voluptate quibusdam inventore tempore illum sint numquam consequatur asperiores?', price: 7000, image: 'https://source.unsplash.com/1080x720/?keybord/', state: 1, category: 'Tech', sale: true, createAt: new Date(2019, 1, 1, 0, 0)},
    {id: 4, title: 'Shoes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt sapiente voluptate quibusdam inventore tempore illum sint numquam consequatur asperiores?', price: 15000, image: 'https://source.unsplash.com/1080x720/?shoes/', state: 1, category: 'categorie', sale: true, createAt: new Date(2015, 2, 10)},
    {id: 5, title: 'Maison', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt sapiente voluptate quibusdam inventore tempore illum sint numquam consequatur asperiores?', price: 13000000, image: 'https://source.unsplash.com/1080x720/?home/', state: 1, category: 'Immobilier', sale: true, createAt: new Date(2017, 12, 11)},
    {id: 6, title: 'Ballon', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt sapiente voluptate quibusdam inventore tempore illum sint numquam consequatur asperiores?', price: 3000, image: 'https://source.unsplash.com/1080x720/?ball/', state: 1, category: 'Jeux', sale: true, createAt: new Date(2011,3,12)},
  ];

  constructor() { }

  getAllbiens(): Bien[] {
    return this.biens;
  }

  getBienById(id: number): any{
    // tslint:disable-next-line:max-line-length
      const bienFound = this.biens.find( (b: {id: number, title: string, description: string, price: number, image: string, state: number, category: string, sale: boolean, createAt: Date}) => {
          return b.id === id;
      });
      return bienFound;
      // for (let b of this.biens) {
      //   if (b.id == id) {
      //       return b;
      //   }

      // }
  }
  addBien(newBien: any){
    this.biens.push(newBien);
  }
  updateBien(bienUpdated: any){
    var bienUpd = this.biens.find(
        (b) =>{
          return b.id === bienUpdated.id;
        }
      );
    if (bienUpd) {
      bienUpd = {...bienUpdated};
    }
  }
  deleteBien(id: number){
    var bienDeleted = this.biens.find(
      (b) =>{
          return b.id === id;
      }
    );
    if (bienDeleted.id !== -1) this.biens.splice(bienDeleted.id, 1);
  }

  getLastId(){
    return this.biens[this.biens.length - 1] ?
    this.biens[this.biens.length - 1].id : 0;
  }

}
