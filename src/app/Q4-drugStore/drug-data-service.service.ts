import { Injectable } from '@angular/core';
import {Drugs} from "./drugs";

@Injectable({
  providedIn: 'root'
})
export class DrugDataServiceService {

  constructor() { }

  getDrugList() : Array<Drugs> {
    // testing data for dev
    let drug1 : Drugs = {
      UUID:"",
      name:"magic drug 1",
      date_added: new Date(),
      description:"any desc",
      available_quantity:10
    };

    let drug2 : Drugs = {
      UUID:"",
      name:"magic drug 2",
      date_added: new Date(),
      description:"any desc",
      available_quantity:0
    };

    return [drug1, drug2];
  }
}
