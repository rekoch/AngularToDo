import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  // wir möchten gerne ein einzelnes ToDo haben und definieren daher hier ein Input()
  //siehe auch https://angular.io/guide/inputs-outputs bzw. https://angular.io/guide/inputs-outputs#configuring-the-child-component
  // als Datentyp nutzen wir unser neues Interface Todo -> input() toDo: ToDo
  constructor() {}

  ngOnInit() {}
}
