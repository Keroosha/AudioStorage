import {Injectable} from '@angular/core';

import Album from './models/Album';
import { Howl } from 'Howler';
import Song from './models/Song';

@Injectable()
export class PlayerService {

  private howlerInstance;
  private currentTrackIndex = 0;
  public currentTrack: Song;
  private link = 'http://localhost:32769/api/Music/Song/';
  private album: Album;

  constructor() { }

  assignNewAlbum(album: Album) {
    this.album = album;
    this.currentTrackIndex = 0;
    this.playTrack();
  }

  playTrack() {
    if (this.howlerInstance) {
      this.howlerInstance.stop();
    }

    if (!(this.album.songs[this.currentTrackIndex])) {
      return;
    }

    this.currentTrack = this.album.songs[this.currentTrackIndex];
    this.howlerInstance = new Howl({
      src: [
        `${this.link}${this.currentTrack.id}`
      ],
      format: [
        'mp3'
      ]
    });
    this.howlerInstance.play();
    this.howlerInstance.on('end', () => this.nextTrack());
  }

  nextTrack() {
    this.currentTrackIndex++;
    this.playTrack();
  }

  previousTrack() {
    if (this.currentTrackIndex - 1 <= 0) {
      this.playTrack();
    }
    this.currentTrackIndex -= 1;
    this.playTrack();
  }
}
