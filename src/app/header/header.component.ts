import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  @Output()  searchElt = new EventEmitter<string>();
  search: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  searchThis(){
    this.searchElt.emit(this.search);
  }
}
