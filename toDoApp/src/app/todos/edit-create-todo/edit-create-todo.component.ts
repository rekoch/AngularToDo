import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-edit-create-todo',
  templateUrl: './edit-create-todo.component.html',
  styleUrls: ['./edit-create-todo.component.scss'],
})
export class EditCreateTodoComponent implements OnInit {
  @Input() todo: ToDo = { name: '', status: 'open' };
  // hier ein neues @Output() erstellen
  // wenn 'todoChanged' ausgeführt wird, muss mittels @Output das angepasste ToDo übermittelt werden
  // verwende dazu emit() des EventEmitter

  constructor() {}

  ngOnInit() {}

  todoChanged() {
    // hier so umbauen dass das Output verwendet wird
    console.log(this.todo.name);
  }
}
