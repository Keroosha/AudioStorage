import {Component, Input, OnChanges, OnInit} from '@angular/core';
import Album from '../models/Album';
import { Howl } from 'howler';
import Song from '../models/Song';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnChanges {

  @Input() album: Album;
  private howlerInstance;
  private currentTrackIndex = 0;
  private link = 'http://localhost:32768/api/Music/Song/';

  constructor() {
  }

  playTrack() {
    if (this.howlerInstance) {
      this.howlerInstance.stop();
    }
    
    if (!(this.album.songs[this.currentTrackIndex])) {
      return;
    }

    const newTrack = this.album.songs[this.currentTrackIndex];
    this.howlerInstance = new Howl({
      src: [
        `${this.link}${newTrack.id}`
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

  ngOnChanges(changes) {
    if (changes.album) {
      if (!changes.album.firstChange) {
        this.currentTrackIndex = 0;
        this.playTrack();
      }
    }
  }
}
