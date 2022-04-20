import { Component, OnInit, Input } from '@angular/core';
import {Drugs} from "../drugs";
import {DrugDataServiceService} from "../drug-data-service.service";

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
})
export class DrugListComponent implements OnInit {
  drugList:Array<Drugs> = [];

  constructor(private data : DrugDataServiceService) { }

  ngOnInit(): void {
    this.drugList = this.data.getDrugList();
  }

}
