import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  toDo: ToDo[] = [
    { name: 'Geschenk verpacken', status: 'open' },
    { name: 'Angular Hausaufgaben erledigen', status: 'open' },
    { name: 'Tan-Verfahren anmelden', status: 'open' },
    { name: 'Termin Hausärztin ausmachen', status: 'open' },
  ];

  constructor() {}

  ngOnInit() {}

  buttonClick() {
    console.log(this.buttonClick);
  }
}

// hier schreiben wir später das Interface "ToDo" -> kannst du auch bereits versuchen.
// bspw. "export interface Bird {"name": string}"
