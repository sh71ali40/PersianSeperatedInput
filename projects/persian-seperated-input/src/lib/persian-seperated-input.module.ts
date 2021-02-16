import { NgModule } from '@angular/core';
import { PersianSeperatedInputComponent } from './persian-seperated-input.component';
import { CommonModule  } from '@angular/common'



@NgModule({
  declarations: [PersianSeperatedInputComponent],
  imports: [
    CommonModule
  ],
  exports: [PersianSeperatedInputComponent]
})
export class PersianSeperatedInputModule { }
