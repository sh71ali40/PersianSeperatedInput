import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-test';
  inputValue = "123";
  onInputChange(event) {
    console.log('event',event);
  }
  onClearClick(){
    this.inputValue = '';
  }
}
