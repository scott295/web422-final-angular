import { Component, OnInit } from '@angular/core';
import {Drugs} from "./drugs";
import {DrugDataServiceService} from "./drug-data-service.service";

@Component({
  selector: 'app-Q4-drugStore',
  templateUrl: './Q4-drugStore.component.html',
  styleUrls: []
})
export class Q4DrugStoreComponent implements OnInit {

  constructor(data : DrugDataServiceService) { }

  ngOnInit(): void {

  }


}
