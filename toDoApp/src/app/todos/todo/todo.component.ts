import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: ToDo;
  @Output() toDoClicked = new EventEmitter<null>();
  buttonActionText: 'erledigt' | 'löschen' = 'erledigt';

  constructor() {}

  ngOnInit() {
    if (this.todo?.status === 'open') {
      this.buttonActionText = 'erledigt';
    } else {
      this.buttonActionText = 'löschen';
    }
  }

  handleTodoClick() {
    console.log('button wurde geklickt');
    this.toDoClicked.emit();
  }
}
