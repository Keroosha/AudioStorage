import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Album from '../models/Album';

@Component({
  selector: 'app-album-list-element',
  templateUrl: './album-list-element.component.html',
  styleUrls: ['./album-list-element.component.css']
})
export class AlbumListElementComponent implements OnInit {

  @Input() album: Album;

  @Output() playAlbum = new EventEmitter<Album>();

  constructor() { }

  ngOnInit() {
  }


}
