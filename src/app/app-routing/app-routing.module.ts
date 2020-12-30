import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBienComponent } from '../biens/list-bien/list-bien.component';
import { AddBienComponent } from '../biens/add-bien/add-bien.component';
import { DetailBienComponent } from '../biens/detail-bien/detail-bien.component';
import { ReservationsBienComponent } from '../biens/reservations-bien/reservations-bien.component';
import { DetailsReservationComponent } from '../biens/reservations-bien/details-reservation/details-reservation.component';
import { EditReservationComponent } from '../biens/reservations-bien/edit-reservation/edit-reservation.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import {AuthGuardService} from '../Services/auth-guard.service';
import {ErrorsComponent} from '../errors/errors.component';
import {BienResolverService} from '../Services/bien-resolver.service';
import {ConnexionComponent} from '../connexion/connexion.component';


const appRoute: Routes = [
  { path: '', redirectTo: '/biens', pathMatch: 'full' },
  { path: 'biens', component: ListBienComponent },
  { path: 'biens/add', component: AddBienComponent },
  { path: 'biens/:id', component: DetailBienComponent, resolve: {bien: BienResolverService} },
  { path: 'login', component: ConnexionComponent },

  {
    path: 'reservations',
    component: ReservationsBienComponent,
    canActivateChild: [AuthGuardService],

    children: [
      { path: ':id', component: DetailsReservationComponent },
      { path: ':id/edit', component: EditReservationComponent}
    ]
  },



  { path: 'not-found', component: ErrorsComponent, data: {message: 'Page introuvable!'}},
  // { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute),

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
