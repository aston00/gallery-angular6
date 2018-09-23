import { ImagePreviewComponent } from './../preview/preview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'preview/image-preview', component: ImagePreviewComponent},
  // {path: 'preview/video-previewer', component: VideoPreviewComponent},
  {path: 'preview', redirectTo: 'preview/image-preview'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class PreviewRouterModule { }
