import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlickrHeaderComponent} from './flickr-header.component';

describe('FlickrHeaderComponent', () => {
  let component: FlickrHeaderComponent;
  let fixture: ComponentFixture<FlickrHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlickrHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
