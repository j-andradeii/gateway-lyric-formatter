import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4LyricsDialogComponent } from './c4-lyrics-dialog.component';

describe('C4LyricsDialogComponent', () => {
  let component: C4LyricsDialogComponent;
  let fixture: ComponentFixture<C4LyricsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4LyricsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C4LyricsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
