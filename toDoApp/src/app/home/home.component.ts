import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // erstelle eine variable mit 1-4 todos. Dafür musst du ein Array nutzen []
  // bspw. birds = [] -> ohne Typ. Machen wir später.

  constructor() {}

  ngOnInit() {}
}

// hier schreiben wir später das Interface "ToDo" -> kannst du auch bereits versuchen.
// bspw. "export interface Bird {"name": string}"
