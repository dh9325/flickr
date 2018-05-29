import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlickrPhotosComponent} from './flickr-photos.component';

describe('FlickrPhotosComponent', () => {
  let component: FlickrPhotosComponent;
  let fixture: ComponentFixture<FlickrPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlickrPhotosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
