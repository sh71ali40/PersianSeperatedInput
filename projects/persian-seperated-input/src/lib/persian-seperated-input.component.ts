import { Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';

@Component({
  selector: 'psi-input',
  template: `

    <input *ngFor="let item of Count; let i = index" (keyup)="onKeyUp(i,$event)" #inputElement oninput="javascript:this.value =  this.value.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));" maxlength="1"  [type]="!digitOnly?'text':'tel'"  />
  `,
  styles: [
    `input {
      /* float: left; */
      width: 20px;
      text-align: center;
      height: 20px;
  }`
  ]
})
export class PersianSeperatedInputComponent implements OnInit {
  @Input() length: number = 5;
  @Input() digitOnly: boolean = false;
  @Input() disableNexInput: boolean = false;

  @ViewChildren('inputElement') inputElements;
  @Output() onInputChange: EventEmitter<any> = new EventEmitter();

  Count;
  Value='';
  constructor() {
    this.Count = new Array(this.length)
  }

  ngOnInit(): void {
  }

  onKeyUp(index,event) {


    let previousInput = this.inputElements._results[index-1];
    let nextInput = this.inputElements._results[index+1];
    if(event.key=='Backspace') {

      //console.log('value',this.Value.substring(0,index),this.Value.substring(index+1, this.Value.length));
      this.Value = this.Value.substring(0,index) + this.Value.substring(index+1, this.Value.length);
      if(previousInput) {
        previousInput.nativeElement.focus();
        (<HTMLInputElement>previousInput.nativeElement).select();
      }
    } else {
      this.Value = this.Value.substr(0, index) + event.target.value + this.Value.substr(index+1);
      if(nextInput) {
        nextInput.nativeElement.focus();
        (<HTMLInputElement>nextInput.nativeElement).select();
      }
    }
    // console.log('value',this.Value);
    this.onInputChange.emit(this.Value);
  }
}
