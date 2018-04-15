import { Component } from '@angular/core';
import Album from './models/Album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  playingNow: Album;

  sendAlbumToPlayer(event: Album) {
    this.playingNow = event;
  }
}
