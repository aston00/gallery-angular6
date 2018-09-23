import { ImagePreviewComponent } from './../preview/preview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes, RouterModule } from '@angular/router';
import { PreviewersComponent } from '../previewers.component';

const routes: Routes = [
  {
    path: 'preview', component: ImagePreviewComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class PreviewRouterModule { }
