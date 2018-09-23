import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitByPipe } from './limit-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LimitByPipe
  ],
  exports: [LimitByPipe]
})
export class PipesModule { }
