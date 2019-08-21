import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spis-skladnikow',
  templateUrl: './spis-skladnikow.component.html',
  styleUrls: ['./spis-skladnikow.component.css']
})
export class SpisSkladnikowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveToMainPage() {
    this.router.navigate(['']);
  }
}
