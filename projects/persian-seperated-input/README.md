# PersianSeperatedInput
![GIPHY](https://media.giphy.com/media/otDJKYuVeF0wl9QZPc/giphy.gif)

Create seperated input which support persian numbers for iphone numeric keyboard.
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.13.

## Installation
> npm install --save persian-seperated-input

## Usage
Add PersianSeperatedInputModule to imports `app.module.ts` like 
```
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

```

Add component to your page:

```
  <psi-input (onInputChange)="onInputChange($event)" [digitOnly]="true"></psi-input>
```
## API
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>default</th>
<th>Description</th>
</tr>
<tr>
<td>length</td>
<td>number</td>
<td>false</td>
<td>5</td>
<td>Number of inputs to be rendered</td>
</tr>
<tr>
<td>digitOnly</td>
<td>boolean</td>
<td>false</td>
<td>false</td>
<td>show numeric keyboard on mobile devices</td>
</tr>

</table>

