import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListElementComponent } from './album-list-element.component';

describe('AlbumListElementComponent', () => {
  let component: AlbumListElementComponent;
  let fixture: ComponentFixture<AlbumListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
