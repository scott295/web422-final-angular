import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Question2Component} from "./question2/question2.component";
import {Question3Component} from "./question3/question3.component";

const routes: Routes = [
  {path:'question2', component:Question2Component},
  {path:'question3', component:Question3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
