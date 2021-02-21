import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-test';
  inputValue = "";
  onInputChange(event) {
    console.log('event',event);
    this.inputValue = event;
  }
  onClearClick(){
    console.log(this.inputValue)
    this.inputValue = '';
    console.log(this.inputValue)
  }
}
