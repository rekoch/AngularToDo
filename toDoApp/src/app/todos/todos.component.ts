import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  toDo: ToDo[] = [
    { name: 'Geschenk verpacken', status: 'open' },
    { name: 'Angular Hausaufgaben erledigen', status: 'open' },
    { name: 'Tan-Verfahren anmelden', status: 'open' },
    { name: 'Termin Hausärztin ausmachen', status: 'open' },
  ];

  constructor() {}

  ngOnInit() {}

  // buttonClick() in die Child-Component verschieben. Daher nach todo.component.ts
  buttonClick() {
    console.log(this.buttonClick);
  }
}
