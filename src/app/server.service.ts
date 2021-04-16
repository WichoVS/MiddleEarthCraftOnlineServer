import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Players, Version, RootObject} from 'src/app/core/interfaces/Clases'

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  maxP: string = '';
  conP: string = '';
  url: string = 'https://api.minetools.eu/ping/51.81.171.171/25582';
  items = [];
  obj: RootObject;

  constructor(private _http: HttpClient) {
    this._http
      .get(this.url)
      .toPromise()
      .then((data) => {
        for (let key in data)
          if (data.hasOwnProperty(key))
          this.items.push(data[key]);
      });
  }

  setMaxP(players: string) {
    this.maxP = players;
  }

  setConP(players: string) {
    this.conP = players;
  }

  getData() {
    return this.items;
  }
}
