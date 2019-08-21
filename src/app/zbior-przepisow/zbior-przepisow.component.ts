import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Przepis } from '../Przepis';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-zbior-przepisow',
  templateUrl: './zbior-przepisow.component.html',
  styleUrls: ['./zbior-przepisow.component.css']
})
export class ZbiorPrzepisowComponent implements OnInit {

  listaPrzepisow: Array<Przepis> = [];

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.metodapobierajacadane();
  }

  metodapobierajacadane() {
    this.http.getPrzepis().subscribe( lista => { // lista to dowolna nazwa
        this.listaPrzepisow = lista; // przypisanie listy do listyPrzepisow
   });
  }

  MoveToMainPage() {
    this.router.navigate(['']);
  }

  MovetoAboutAuthor() {
    this.router.navigate(['oautorze-router']);
  }

  MovetoNewRecipe() {
    this.router.navigate(['nowyprzepis-router']);
  }

  edit(id: number) {
    this.http.setholdid(id); // wywołanie metody, która ustawia zmienną holdid w serwisie na zmienną, której został kliknięty przycisk
    console.log(id);
    this.router.navigate(['edycja-przepisu-router']);
  }
}
