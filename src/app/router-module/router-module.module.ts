import { ErrorsHandlingComponent } from './../errors-handling/errors-handling.component';
import { CarouselComponent } from './../carousel/carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from '../preview/preview.component';

const routes: Routes = [
  {path: 'carousel', component: CarouselComponent},
  {path: 'preview', component: PreviewComponent},
  {path: '', redirectTo: 'preview', pathMatch: 'full'},
  {path: '**', component: ErrorsHandlingComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RouterModuleModule { }
