import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlickrHeaderComponent} from './containers/flickr-header/flickr-header.component';
import {MaterialModule} from './material/material.module';
import {PhotoComponent} from './components/photo/photo.component';
import {TitleComponent} from './components/title/title.component';
import {DescriptionComponent} from './components/description/description.component';
import {TagsComponent} from './components/tags/tags.component';
import {FlickrPhotosComponent} from './containers/flickr-photos/flickr-photos.component';
import {PhotoContainerComponent} from './containers/photo-container/photo-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FlickrHeaderComponent,
    PhotoComponent,
    TitleComponent,
    DescriptionComponent,
    TagsComponent,
    FlickrPhotosComponent,
    PhotoContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
