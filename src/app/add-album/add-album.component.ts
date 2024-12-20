import { Component } from '@angular/core';
import { Album } from '../models/Album';
import { AlbumService } from '../album/album.service';
@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
  album: Album = new Album();

  constructor(private albumService: AlbumService) {}

  addAlbum() {
    this.albumService.addAlbum(this.album);
  }
}
