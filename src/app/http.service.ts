import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Przepis } from './Przepis';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  holdid: number;

  httpOptions = {
    headers: new HttpHeaders ({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { // wstrzykniecie modulu httpclient

  }

  getPrzepis(): Observable<Array<Przepis>> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Array<Przepis>>('api/Przepisy'); /* odwołanie do wstrzykniętego modułu (http), następnie pobranie (get) listy przepisów z bazy || ('odwołanie do nazwy tabeli w bazie') */
  }

  addPrzepis(newPrzepis: Przepis): Observable<Przepis> {
    return this.http.post<Przepis>('api/Przepisy', newPrzepis, this.httpOptions);
  }

  setholdid(newid: number) {
    this.holdid = newid; // ustawia holdid
  }

  getholdid() {
    return this.holdid; // zczytuje holdid
  }

  updatePrzepis(newPrzepis: Przepis, id: number) {
    return this.http.put('api/Przepisy/?id=${id}', newPrzepis);
  }
}

