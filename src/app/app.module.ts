import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { ItemBienComponent } from './biens/list-bien/item-bien/item-bien.component';
import { BienJumbotromComponent } from './biens/bien-jumbotrom/bien-jumbotrom.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { TimeLeftPipe } from './pipes/time-left.pipe';
import { SummerizePipe } from './pipes/summerize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsBienComponent } from './biens/reservations-bien/reservations-bien.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DetailsReservationComponent } from './biens/reservations-bien/details-reservation/details-reservation.component';
import { EditReservationComponent } from './biens/reservations-bien/edit-reservation/edit-reservation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorsComponent } from './errors/errors.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LoginComponent } from './connexion/login/login.component';
import { RegisterComponent } from './connexion/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BiensComponent,
    AddBienComponent,
    DetailBienComponent,
    ListBienComponent,
    ItemBienComponent,
    BienJumbotromComponent,
    SeparatorPipe,
    TimeLeftPipe,
    SummerizePipe,
    FilterPipe,
    ReservationsBienComponent,
    DetailsReservationComponent,
    EditReservationComponent,
    PageNotFoundComponent,
    ErrorsComponent,
    ConnexionComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
