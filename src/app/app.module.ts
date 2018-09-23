import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModuleModule } from './router-module/router-module.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { CarouselComponent } from './image-carousel/carousel.component';
import { ErrorsHandlingComponent } from './errors-handling/errors-handling.component';
import { ImagesService } from './services/images/images.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';
import { SignModuleModule } from './sign/sign-module/sign-module.module';
import { VideosService } from './services/videos/videos.service';
import { PreviewRouterModule } from './previewers/preview-router/preview-router.module';
import { PreviewModuleModule } from './previewers/preview-module/preview-module.module';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ShowcaseComponent,
    CarouselComponent,
    ErrorsHandlingComponent,
    VideoCarouselComponent
    ],
  imports: [
    PipesModule,
    SignModuleModule,
    BrowserModule,
    PreviewRouterModule,
    HttpClientModule,
    RouterModuleModule,
    PreviewModuleModule
  ],
  providers: [ImagesService,
    VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
