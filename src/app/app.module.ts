import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModuleModule } from './router-module/router-module.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { CarouselComponent } from './image-carousel/carousel.component';
import { PreviewComponent } from './preview/preview.component';
import { SectionsMenuComponent } from './preview/sections-menu/sections-menu.component';
import { PreviewSamplesComponent } from './preview/preview-samples/preview-samples.component';
import { ErrorsHandlingComponent } from './errors-handling/errors-handling.component';
import { ImagesService } from './services/images/images.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { LimitByPipe } from './limit-by.pipe';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';
import { SignModuleModule } from './sign/sign-module/sign-module.module';
import { VideosService } from './services/videos/videos.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ShowcaseComponent,
    CarouselComponent,
    PreviewComponent,
    SectionsMenuComponent,
    PreviewSamplesComponent,
    ErrorsHandlingComponent,
    LimitByPipe,
    VideoCarouselComponent
  ],
  imports: [
    SignModuleModule,
    BrowserModule,

    HttpClientModule,
    RouterModuleModule
  ],
  providers: [ImagesService,
    VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
