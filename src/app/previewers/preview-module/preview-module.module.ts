
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewSamplesComponent } from '../preview/preview-samples/preview-samples.component';
import { SectionsMenuComponent } from '../preview/sections-menu/sections-menu.component';
import { ImagePreviewComponent } from '../preview/preview.component';
import { PreviewersComponent } from '../previewers.component';
import { PreviewRouterModule } from '../preview-router/preview-router.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ShowcaseComponent } from '../../showcase/showcase.component';


@NgModule({
  imports: [
    CommonModule,
    PreviewRouterModule,
    PipesModule
  ],
  declarations: [
    ShowcaseComponent,
    PreviewersComponent,
    ImagePreviewComponent,
    SectionsMenuComponent,
    PreviewSamplesComponent
  ],
  exports: [PreviewersComponent]
})
export class PreviewModuleModule { }
