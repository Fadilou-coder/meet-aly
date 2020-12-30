import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meet-angular';
  // btn = 'Activer le Champs';
  // ok = false;
  // nom = 'Anonymous';

  search:string = '';

  searchThis( data: string ): void{
    this.search = data;
    console.log(data);
  }

  // onClick(){
  //   this.ok = !this.ok;
  //   // if (this.ok) {
  //   //   this.btn = 'Desactiver le Champs'
  //   // }else{
  //   //   this.btn = 'Activer le Champs';
  //   // }
  //   this.btn = this.ok ? 'Deactiver le Champs' : 'Activer le Champs'
  // }
}
