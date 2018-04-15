import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserComponent } from './browser/browser.component';
import { PlayerComponent } from './player/player.component';
import {HttpClientModule} from '@angular/common/http';
import {AlbumsService} from './albums.service';
import { AlbumListElementComponent } from './album-list-element/album-list-element.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrowserComponent,
    PlayerComponent,
    AlbumListElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
