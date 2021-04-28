import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-test';
  inputValue = "";

  @ViewChild('myInput') myInput:any;
  onInputChange(event) {
    console.log('event',event);
    this.inputValue = event;
  }
  onClearClick(){


    this.myInput.setValue('');

  }
}
