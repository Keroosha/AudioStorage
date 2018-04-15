import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Song from './models/Song';
import Album from './models/Album';

@Injectable()
export class AlbumsService {

  private albums;
  private link = 'http://localhost:32768/api/Music/';

  constructor(private http: HttpClient) { }

  loadAlbums() {
    return this.http.get<[Album]>(`${this.link}Albums`);
  }

  loadAlbumSongs(id: number) {
    return this.http.get<[Song]>(`${this.link}Album/${id}`);
  }
}
