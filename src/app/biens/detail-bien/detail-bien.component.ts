import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, Params} from '@angular/router';
import { BienService } from '../bien.service';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {

  constructor(private url: ActivatedRoute, private bienservice: BienService) { }



  bien;

  // @ts-ignore
  ngOnInit(): void {
    this.url.data.subscribe(
      (data: Data) => {
        this.bien = data.bien;
      }
    );
    /* const id = +this.url.snapshot.params['id'];
     this.bien = this.bienservice.getBienById(id);
     console.log(id);
    console.log(this.bien);

    //for next time that this component will be loaded
    this.url.params.subscribe(
      (params: Params) => {
          console.log('the params change');
          const id = +params['id'];
          this.bien = this.bienservice.getBienById(id);
      }
    )

  }*/

  }
}
