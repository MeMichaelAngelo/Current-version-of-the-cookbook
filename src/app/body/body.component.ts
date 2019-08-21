import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Przepis } from '../Przepis';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

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

  moveto() {
    this.router.navigate(['nowyprzepis-router']);
  }

  doSpisuSkladnikow() {
    this.router.navigate(['spisskladnikow-router']);
  }

  MovetoListOfRecipes() {
    this.router.navigate(['zbior-przepisow-router']);
  }
}
