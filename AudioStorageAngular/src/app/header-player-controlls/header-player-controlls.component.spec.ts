import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPlayerControllsComponent } from './header-player-controlls.component';

describe('HeaderPlayerControllsComponent', () => {
  let component: HeaderPlayerControllsComponent;
  let fixture: ComponentFixture<HeaderPlayerControllsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPlayerControllsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPlayerControllsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
