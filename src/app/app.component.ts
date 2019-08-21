import { Component } from '@angular/core';
import { Przepis } from './Przepis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nowyPrzepis = new Array<Przepis>();
}
