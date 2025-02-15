import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4LyricsSplashComponent } from './c4-lyrics-splash.component';

describe('C4LyricsSplashComponent', () => {
  let component: C4LyricsSplashComponent;
  let fixture: ComponentFixture<C4LyricsSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4LyricsSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C4LyricsSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
