import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PersianSeperatedInputModule} from 'persian-seperated-input'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PersianSeperatedInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
