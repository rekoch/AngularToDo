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
    const indexOfTodo = this.originalToDos.indexOf(todo);
    if (todo.status === 'done') {
      this.originalToDos.splice(indexOfTodo, 1);
    } else {
      todo.status = 'done';
      this.originalToDos[indexOfTodo].status = todo.status;
    }
    this.filterTodos();
  }

  handleChangedTodo(changedTodo: ToDo) {
    const indexOfChangedTodo = this.originalToDos.indexOf(changedTodo);
    if (indexOfChangedTodo >= 0) {
      // diese Logik produziert Fehler, da die Objekte verbunden bleiben.
      // this.originalToDos[indexOfChangedTodo] = changedTodo;
      // Korrektur mit spread Operator = Kopie des Objektes
      this.originalToDos[indexOfChangedTodo] = { ...changedTodo };
    } else {
      // this.originalToDos.push(changedTodo);
      this.originalToDos.push({ ...changedTodo });
    }
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
