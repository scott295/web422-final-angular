import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DrugListComponent } from './Q4-drugStore/druglist/drug-list.component';
import { HomepageComponent } from './Q4-drugStore/homepage/homepage.component';
import {Q4DrugStoreComponent} from "./Q4-drugStore/Q4-drugStore.component";

@NgModule({
  declarations: [
    AppComponent,
    Question2Component,
    Question3Component,
    DrugListComponent,
    HomepageComponent,
    Q4DrugStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
