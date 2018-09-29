import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModuleModule } from './router-module/router-module.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousels/image-carousel/carousel.component';
import { ErrorsHandlingComponent } from './errors-handling/errors-handling.component';
import { ImagesService } from './services/images/images.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { VideoCarouselComponent } from './carousels/video-carousel/video-carousel.component';
import { VideosService } from './services/videos/videos.service';
import { PreviewModuleModule } from './previewers/preview-module/preview-module.module';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ErrorsHandlingComponent,
    VideoCarouselComponent
    ],
  imports: [
    PipesModule,
    BrowserModule,
    HttpClientModule,
    RouterModuleModule,
    PreviewModuleModule
  ],
  providers: [ImagesService,
    VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
