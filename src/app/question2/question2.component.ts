import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interpolationAnswer="The value of this <p> element is past by interpolation." +
    "It's like defining a variable in JS and use its value in the html template. ";
  // &lt; is <,  &gt; is >

  propBindAnswer="Property binding can do similar things like interpolation. " +
    "Yet, property binding can pass non string values while interpolation can not. ";

  colors=[
    "red", "yellow", "green"
  ];
}
