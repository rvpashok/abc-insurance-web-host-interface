import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from 'shared';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SharedService],
  exports:[]
})
export class SharedModule {
  constructor(){
    console.log("SharedModule Class Called");
  }
    
 }
