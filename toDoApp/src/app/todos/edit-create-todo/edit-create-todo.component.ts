import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-edit-create-todo',
  templateUrl: './edit-create-todo.component.html',
  styleUrls: ['./edit-create-todo.component.scss'],
})
export class EditCreateTodoComponent implements OnInit {
  @Input() todo: ToDo = { name: '', status: 'open' };
  // als Input nimmst du noch die Varianten 'edit' bzw. 'neu' entgegen.
  // so kannst du das UI anpassen und korrekt auf die Variante reagieren
  @Output() todoChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  todoEdited(form: HTMLFormElement) {
    this.todoChanged.emit(this.todo);
    form.reset();
  }
}
