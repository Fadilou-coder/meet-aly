import { UtileService } from './../../../utile.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {

  @Input() bien:{id: number, title: string, description: string, price: number, image: string, state: number, category: string, sale: boolean, createAt: Date};
  constructor(private u: UtileService) { }
  

  ngOnInit(): void {
  }



}
