import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public title: string;
  constructor() { 
    this.title = "Bienvenid@ a AviFly";

  }

  ngOnInit(): void {
  }

}
