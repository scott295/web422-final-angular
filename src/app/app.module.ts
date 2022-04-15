import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';

@NgModule({
  declarations: [
    AppComponent,
    Question2Component,
    Question3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
