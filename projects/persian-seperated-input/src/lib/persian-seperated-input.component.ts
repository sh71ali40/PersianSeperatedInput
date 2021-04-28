import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChildren,
} from "@angular/core";
// [value]="Count[i]"
// [(ngModel)]="Count[i]"
@Component({
  selector: "psi-input",
  template: `
    <input
      *ngFor="let item of Count; let i = index"
      [value]="Count[i]"
      (keyup)="onKeyUp(i, $event)"
      (click)="onInputClick(i)"
      #inputElement
      oninput="javascript:this.value =  this.value.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));"
      maxlength="1"
      [type]="!digitOnly ? 'text' : 'tel'"
    />
  `,
  styles: [
    `
      input {
        /* float: left; */
        width: 20px;
        text-align: center;
        height: 20px;
      }
    `,
  ],
})
export class PersianSeperatedInputComponent implements OnInit {
  @Input() length: number = 5;
  @Input() digitOnly: boolean = false;
  @Input() disableNexInput: boolean = false;

  @ViewChildren("inputElement") inputElements;
  @Output() onInputChange: EventEmitter<any> = new EventEmitter();

  Count = new Array(this.length);

  InputValue = "";
  @Input() FirstInputSelected = false;
  constructor() {
    // this.Count = new Array(this.length)
  }

  ngOnInit(): void {
    this.BindValue();
  }

  BindValue() {
    console.log("this.InputValue", this.InputValue);
    // this.Count =
    for (let index = 0; index < this.Count.length; index++) {
      this.Count[index] = "";
    }
  }


  onInputClick(index) {
    let input = this.inputElements._results[index];
    (<HTMLInputElement>input.nativeElement).select();
  }
  ngAfterViewInit() {
    // console.log(this.inputElements);
    if (this.FirstInputSelected) {
      this.inputElements._results[0].nativeElement.focus();
    }
  }

  onKeyUp(index, event) {
    // console.log('index',this.InputValue)

    let previousInput = this.inputElements._results[index - 1];
    let nextInput = this.inputElements._results[index + 1];

    if (event.key == "Backspace") {
      //console.log('value',this.Value.substring(0,index),this.Value.substring(index+1, this.Value.length));
      this.InputValue =
        this.InputValue.substring(0, index) +
        this.InputValue.substring(index + 1, this.InputValue.length);
      if (previousInput) {
        previousInput.nativeElement.focus();
        (<HTMLInputElement>previousInput.nativeElement).select();
      }
    } else {
      this.InputValue =
        this.InputValue.substr(0, index) +
        event.target.value +
        this.InputValue.substr(index + 1);
      if (nextInput) {
        nextInput.nativeElement.focus();
        (<HTMLInputElement>nextInput.nativeElement).select();
      }
    }

    //console.log(this.Count);

    this.onInputChange.emit(this.InputValue);
  }

  setValue(value: any) {
    this.InputValue = "";

    let index = 0;
    this.inputElements.forEach((input) => {
      console.log("element", input);
      index++;
      input.nativeElement.value = value.charAt(index) == "" ? " " : value.charAt(index);
      this.InputValue += value.charAt(index) == "" ? " " : value.charAt(index);
    });
    this.InputValue = this.InputValue.trim();

    // console.log("inputValue", this.InputValue, this.Count);
    this.onInputChange.emit(this.InputValue);
  }
}
