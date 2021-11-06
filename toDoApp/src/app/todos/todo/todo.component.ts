import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: ToDo;
  // Der Button Klick soll als Output an die Todos Component übergeben werden. Daher, die ToDos Component übernimmt die Aufgabe, was nach einem Klick
  // auf den Button geschieht.
  // Definiere ein @Output() -> https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component
  // handleTodoClick nutzt den @Output, um der Parent-Component (ToDos) die Aktion mitzuteilen

  constructor() {}

  ngOnInit() {}

  handleTodoClick() {
    console.log('button wurde geklickt');
  }
}
