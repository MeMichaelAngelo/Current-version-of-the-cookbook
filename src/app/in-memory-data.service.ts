import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const Przepisy = [
      {
        id: 1,
        nazwaPotrawy: 'Omlet',
        opis: 'Paprykę i pomidor dokładnie myjemy i siekamy w kostkę o wymiarach 1x1cm. ',
        skladniki: [{
          nazwa: 'jajka',
          ilosc: 2,
          wartosc: 'szt',
        },
        {
          nazwa: 'papryka',
          ilosc: 1,
          wartosc: 'szt',
        },
        {
          nazwa: 'mleko',
          ilosc: 200,
          wartosc: 'ml',
        },
        {
          nazwa: 'pomidor',
          ilosc: 1,
          wartosc: 'szt',
        }]
      }
    ];

    return { Przepisy };
  }

  constructor() { }
}
