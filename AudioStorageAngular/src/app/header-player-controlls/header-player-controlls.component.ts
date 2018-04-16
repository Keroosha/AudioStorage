import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import Song from '../models/Song';

@Component({
  selector: 'app-header-player-controlls',
  templateUrl: './header-player-controlls.component.html',
  styleUrls: ['./header-player-controlls.component.css']
})
export class HeaderPlayerControllsComponent implements OnInit {

  constructor(private playerService: PlayerService) {

  }

  ngOnInit() {
  }

}
