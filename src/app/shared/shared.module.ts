import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleComponent} from "./title/title.component";
import {CardComponent} from "./card/card.component";
import {InputComponent} from "./input/input.component";



@NgModule({
  declarations: [TitleComponent, CardComponent, InputComponent],
  imports: [
    CommonModule
  ],
  exports: [TitleComponent, CardComponent, InputComponent]
})
export class SharedModule { }
