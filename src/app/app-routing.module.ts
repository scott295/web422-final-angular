import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Question2Component} from "./question2/question2.component";
import {Question3Component} from "./question3/question3.component";
import {DrugListComponent} from "./Q4-drugStore/druglist/drug-list.component";
import {HomepageComponent} from "./Q4-drugStore/homepage/homepage.component";
import {Q4DrugStoreComponent} from "./Q4-drugStore/Q4-drugStore.component";

const routes: Routes = [
  {path:'question2', component:Question2Component},
  {path:'question3', component:Question3Component},
  {path:'drugStore', component:Q4DrugStoreComponent,
    children:[
      {path:'list', component:DrugListComponent},
      {path:'home', component:HomepageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
