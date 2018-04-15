import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AlbumsService} from '../albums.service';
import Album from '../models/Album';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  private loadedAlbums: [Album];
  @Output() playAlbum = new EventEmitter<Album>();

  constructor(private albums: AlbumsService) { }

  ngOnInit() {
    this.albums.loadAlbums()
      .subscribe(
      data => {
        this.loadedAlbums = data;
      }
    );
  }

  playAlbumWrapper(event: Album) {
    if (!(event.songs)) {
      this.albums.loadAlbumSongs(event.id)
        .subscribe((songs) => {
          event.songs = songs;
          this.playAlbum.emit(event);
        });
      return;
    }
    this.playAlbum.emit(event);
  }
}
