import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import {Players,Version,RootObject} from 'src/app/core/interfaces/Clases';

@Component({
  selector: 'app-serverstats',
  templateUrl: './serverstats.component.html',
  styleUrls: ['./serverstats.component.css'],
})
export class ServerstatsComponent implements OnInit {
  data = [];
  items:any;

  public algo:any ;

  constructor(private datos: ServerService)
  {
    this.data = datos.getData();
  }

  getConectados(){

  }

  ngOnInit(){

   }
}
