import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4LyricsPortalComponent } from './c4-lyrics-portal.component';

describe('C4LyricsPortalComponent', () => {
  let component: C4LyricsPortalComponent;
  let fixture: ComponentFixture<C4LyricsPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4LyricsPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C4LyricsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
