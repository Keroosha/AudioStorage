import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserComponent } from './browser/browser.component';
import {HttpClientModule} from '@angular/common/http';
import {AlbumsService} from './albums.service';
import { AlbumListElementComponent } from './album-list-element/album-list-element.component';
import {PlayerService} from './player.service';
import { HeaderPlayerControllsComponent } from './header-player-controlls/header-player-controlls.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrowserComponent,
    AlbumListElementComponent,
    HeaderPlayerControllsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AlbumsService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
