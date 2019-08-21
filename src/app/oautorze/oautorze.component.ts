import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oautorze',
  templateUrl: './oautorze.component.html',
  styleUrls: ['./oautorze.component.css']
})
export class OAutorzeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveToMainPage() {
    this.router.navigate(['']);
  }

  moveToNewRecipe() {
    this.router.navigate(['nowyprzepis-router']);
  }

}
