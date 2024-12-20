import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
})
export class AlbumComponent implements OnInit {
  albums = this.albumService.getAlbums();

  constructor(private albumService: AlbumService) {}

  ngOnInit() {}

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id);
    this.albums = this.albumService.getAlbums();
  }

  viewPhotos(id: number) {
  }
}
