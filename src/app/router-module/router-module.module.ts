import { VideoCarouselComponent } from './../video-carousel/video-carousel.component';
import { SignComponent } from './../sign/sign.component';
import { ErrorsHandlingComponent } from './../errors-handling/errors-handling.component';
import { CarouselComponent } from './../image-carousel/carousel.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from '../preview/preview.component';
import { SignRouterModule } from '../sign/sign-router/sign-router.module';

const routes: Routes = [
    { path: 'carousel/:section', component: CarouselComponent },
    { path: 'preview', component: PreviewComponent },
    { path: 'videos/:section', component: VideoCarouselComponent },
    { path: 'sign', component: SignComponent },
    { path: '', redirectTo: 'preview', pathMatch: 'full' },
    { path: '**', component: ErrorsHandlingComponent }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(routes),
        SignRouterModule
    ],
    declarations: [],
    exports: [RouterModule]
})
export class RouterModuleModule { }
