import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModuleModule } from './router-module/router-module.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PreviewComponent } from './preview/preview.component';
import { SectionsMenuComponent } from './preview/sections-menu/sections-menu.component';
import { PreviewSamplesComponent } from './preview/preview-samples/preview-samples.component';
import { ErrorsHandlingComponent } from './errors-handling/errors-handling.component';
import { ImagesService } from './services/images/images.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { LimitByPipe } from './limit-by.pipe';


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
    LimitByPipe
  ],
  imports: [
    BrowserModule,
    RouterModuleModule,
    HttpClientModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
