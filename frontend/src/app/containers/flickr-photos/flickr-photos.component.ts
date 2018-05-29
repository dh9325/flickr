import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flickr-photos',
  templateUrl: './flickr-photos.component.html',
  styleUrls: ['./flickr-photos.component.css'],
})
export class FlickrPhotosComponent implements OnInit {
  public photos: Array<any>;

  constructor() {
    this.photos = [1, 2];
  }

  ngOnInit() {
  }

}
