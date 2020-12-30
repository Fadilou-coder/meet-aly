import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Bien} from '../mdel';
import {BienService} from '../biens/bien.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BienResolverService implements Resolve<Bien>{

  constructor(private bienServeice: BienService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bien> | Promise<Bien> | Bien {
    return this.bienServeice.getBienById(+route.params.id);
  }
}
