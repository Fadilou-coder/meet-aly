import { Component, OnInit, Input } from '@angular/core';
import { BienService } from '../bien.service';
import {Bien} from '../../mdel';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {


  @Input() search = '';
  biens: Bien[];
  dateAct = new Date();
  constructor(private bienservice: BienService) { }

  ngOnInit(): void {
    this.biens = this.bienservice.getAllbiens();
  }

}
