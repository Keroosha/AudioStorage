import { Component } from '@angular/core';

import Album from './models/Album';
import {PlayerService} from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private playerService: PlayerService) {}

  sendAlbumToPlayer(event: Album) {
    this.playerService.assignNewAlbum(event);
  }
}
