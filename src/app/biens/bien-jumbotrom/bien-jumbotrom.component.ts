import { Component, OnInit } from '@angular/core';
import {AutentificationService} from '../../Services/autentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bien-jumbotrom',
  templateUrl: './bien-jumbotrom.component.html',
  styleUrls: ['./bien-jumbotrom.component.css']
})
export class BienJumbotromComponent implements OnInit {
  isconnected = false;
  constructor(private authService: AutentificationService, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login('', '');
    this.isconnected = this.authService.isAutenticated();
  }
  logout(){
    this.authService.logout();
    this.isconnected = this.authService.isAutenticated();
    this.router.navigate(['/biens'])
  }

}
