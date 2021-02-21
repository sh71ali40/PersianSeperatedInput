import { NgModule } from '@angular/core';
import { PersianSeperatedInputComponent } from './persian-seperated-input.component';
import { CommonModule  } from '@angular/common'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PersianSeperatedInputComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PersianSeperatedInputComponent]
})
export class PersianSeperatedInputModule { }
