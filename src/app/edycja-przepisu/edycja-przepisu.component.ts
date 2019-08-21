import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Przepis } from '../Przepis';
import { Skladnik } from '../Skladnik';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edycja-przepisu',
  templateUrl: './edycja-przepisu.component.html',
  styleUrls: ['./edycja-przepisu.component.css']
})
export class EdycjaPrzepisuComponent implements OnInit {

  listaPrzepisow: Array<Przepis> = [];
  id: number;

  ListaSkladnikow: Array <Skladnik> = [];
  nazwa: string;
  ilosc: number;
  wartosc: string;

  skladnik: Skladnik;
  tytul: string;
  pole: string;
  przepis: Przepis;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.getAllRecipes();
    this.wartosc = 'g';
  }

  getAllRecipes() {
    this.id = this.http.getholdid();
    this.http.getPrzepis().subscribe(res => { // res jest wynikiem zwróconym przez getPrzepis()
      this.listaPrzepisow = res; // listaPrzepisow przechowuje wszystkie przepisy
      this.tytul = this.listaPrzepisow[this.id - 1].nazwaPotrawy;
      this.pole = this.listaPrzepisow[this.id - 1].opis;
      this.ListaSkladnikow = this.listaPrzepisow[this.id - 1].skladniki;
    });
  }

  DodajSkladnik() {
    if ( this.nazwa === undefined ) {
      window.alert('Please write name of your ingredient');
    } else if ( this.nazwa.length === 0) {
      window.alert('Name of your ingredient cannot be empty');
    } else if ( this.ilosc <= 0 || this.ilosc === undefined) {
      window.alert('Value of your ingredient cannot be empty');
    } else if ( this.ilosc && typeof this.ilosc === 'string' ) {
      window.alert('Value of your ingredient cannot be string');
    } else {
    this.skladnik = {nazwa: this.nazwa, ilosc: this.ilosc, wartosc: this.wartosc};
    this.ListaSkladnikow.push(this.skladnik);
    this.nazwa = '';
    this.ilosc = null; // zerowanie numbera
    this.wartosc = 'g';
    console.log(this.ListaSkladnikow);
    }
  }

  ZatwierdzPrzepis() {
    if ( this.tytul === undefined ) {
      window.alert('Please write name of your recipe');
    } else if ( this.tytul.length === 0) {
      window.alert('Name of your recipe cannot be empty');
    } else {
      this.przepis = { id: this.id, nazwaPotrawy: this.tytul, opis: this.pole, skladniki: this.ListaSkladnikow};
      this.tytul = '';
      this.pole = '';
      console.log(this.listaPrzepisow);
      this.http.updatePrzepis(this.przepis, this.id).subscribe(list => console.log(list));
      this.router.navigate(['']);
    }
  }

  remove(test: Skladnik) {
    this.ListaSkladnikow =  this.ListaSkladnikow.filter ( e => e !== test); // usuwam składnik z listy składników
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

}
