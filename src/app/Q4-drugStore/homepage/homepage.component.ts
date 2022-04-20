import { Component, OnInit } from '@angular/core';
import {Drugs} from "../drugs";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recentAddList : Array<Drugs> =[];
}
