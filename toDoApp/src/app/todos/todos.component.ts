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

  // Neue Methode schreiben, die verwendet wird, wenn der Button der ToDo (Child-Component) geklickt wurde.
  // Nach Beispiel im todos.component.html (siehe Kommentar), wäre dies bspw. handleTodoClicked()
  // Die Methode soll nach einem Click den Status eines ToDos von "open" auf "erledigt" ändern.

  // Die Methode übernimmt das "Todo" aus dem todos.component.html, um den Status auf "erledigt" zu ändern.
  // handleTodoClicked(todo: Todo)
  // danach kann die Methode auf das todo zugreifen und den Wert anpassen.
  // todo.status = 'erledigt'
}
