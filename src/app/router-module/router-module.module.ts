import { VideoCarouselComponent } from './../carousels/video-carousel/video-carousel.component';
import { SignComponent } from './../sign/sign.component';
import { ErrorsHandlingComponent } from './../errors-handling/errors-handling.component';
import { CarouselComponent } from './../carousels/image-carousel/carousel.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreviewersComponent } from '../previewers/previewers.component';

import { SignRouterModule } from '../sign/sign-router/sign-router.module';
import { PreviewRouterModule } from '../previewers/preview-router/preview-router.module';

const routes: Routes = [
    { path: 'carousel/:section', component: CarouselComponent },
    { path: 'videos/:section', component: VideoCarouselComponent },
    { path: 'preview', component: PreviewersComponent },
    { path: 'sign', component: SignComponent },
    { path: '', redirectTo: 'preview', pathMatch: 'full' },
    { path: '**', component: ErrorsHandlingComponent }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(routes),
        SignRouterModule,
        PreviewRouterModule
    ],
    declarations: [],
    exports: [RouterModule]
})
export class RouterModuleModule { }
