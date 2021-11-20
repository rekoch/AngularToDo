import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: ToDo[] = [];

  public buttonFilterText: 'offene' | 'erledigte' = 'erledigte';
  private visibleTodos: 'done' | 'open' = 'open';

  constructor() {}

  ngOnInit() {
    this.filterTodos();
  }

  switchState() {
    if (this.visibleTodos === 'open') {
      this.buttonFilterText = 'offene';
      this.visibleTodos = 'done';
    } else {
      this.buttonFilterText = 'erledigte';
      this.visibleTodos = 'open';
    }
    this.filterTodos();
  }

  handleTodoClicked(todo: ToDo) {
    // mehr logik :)
    // wenn der Status des Todo bereits auf 'done' ist, dann wollen wir genau dieses aus der originalToDos löschen
    // löschen mit splice https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // zum finden des index nutze indexOf https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    todo.status = 'done';
    this.filterTodos();
  }

  filterTodos() {
    this.todos = this.originalToDos.filter(
      (todo) => todo.status === this.visibleTodos
    );
  }

  originalToDos: ToDo[] = [
    { name: 'Geschenk verpacken', status: 'open' },
    { name: 'Angular Hausaufgaben erledigen', status: 'open' },
    { name: 'Tan-Verfahren anmelden', status: 'open' },
    { name: 'Termin Hausärztin ausmachen', status: 'open' },
  ];
}
