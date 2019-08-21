import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Skladnik } from '../Skladnik';
import { Przepis } from '../Przepis';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-nowy-przepis',
  templateUrl: './nowy-przepis.component.html',
  styleUrls: ['./nowy-przepis.component.css']
})
export class NowyPrzepisComponent implements OnInit {



  ListaSkladnikow: Array <Skladnik> = [];
  nazwa: string;  // te 3 rzeczy muszą być wypisane, ponieważ odnoszą się do pól w ngModel (20, 24, 28 linijka)
  ilosc: number;
  wartosc: string;

  skladnik: Skladnik; // ten składnik musi być, ponieważ są zapisywane do niego 3 pola powyżej    nazwa: typ;

  ListaPrzepisow: Array <Przepis> = [];
  tytul: string;
  pole: string;
  i: number;
  przepis: Przepis;
  form: any;

  constructor(private router: Router, private http: HttpService, private builder: FormBuilder) { }

  ngOnInit() {
    this.wartosc = 'g';
    this.form = this.builder.group({
      tytul:     ['', Validators.required],
      pole:      ['', Validators.required],
      nazwa:      ['', Validators.required],
      ilosc:      ['', Validators.required],
      wartosc:      ['', Validators.required]
});
  }

  DodajSkladnik() {
    /*if ( this.nazwa === undefined ) {
      window.alert('Please write name of your ingredient');
    } else if ( this.nazwa.length === 0) {
      window.alert('Name of your ingredient cannot be empty');
    } else if ( this.ilosc <= 0 || this.ilosc === undefined) {
      window.alert('Value of your ingredient cannot be empty');
    } else if ( this.ilosc && typeof this.ilosc === 'string' ) {
      window.alert('Value of your ingredient cannot be string');
    } else */
    this.skladnik = {nazwa: this.nazwa, ilosc: this.ilosc, wartosc: this.wartosc};
    this.ListaSkladnikow.push(this.skladnik);
    this.nazwa = '';
    this.ilosc = null; // zerowanie numbera
    this.wartosc = 'g';
    console.log(this.ListaSkladnikow);
  }


  ZatwierdzPrzepis() {

    if ( this.tytul === undefined ) {
      window.alert('Please write name of your recipe');
    } else if ( this.tytul.length === 0) {
      window.alert('Name of your recipe cannot be empty');
    } else {
      this.przepis = { id: this.i++, nazwaPotrawy: this.tytul, opis: this.pole, skladniki: this.ListaSkladnikow};
      this.tytul = '';
      this.pole = '';
      console.log(this.ListaPrzepisow);
      this.http.addPrzepis(this.przepis).subscribe(list => console.log(list));
      this.router.navigate(['']);
    }
  }

  remove(test: Skladnik) {
   this.ListaSkladnikow =  this.ListaSkladnikow.filter ( e => e !== test); // usuwam składnik z listy składników
  }

  moveToMainPage() {
    this.router.navigate(['']);
  }

  movetoAboutAuthor() {
    this.router.navigate(['oautorze-router']);
  }
}
