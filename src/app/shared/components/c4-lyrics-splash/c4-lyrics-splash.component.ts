import { animate, style, transition, trigger } from '@angular/animations';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ApiEvent, ApiEventStatus } from '../../models/api-event';
import { ApiEventService } from '../../services/api-event.service';

@UntilDestroy()
@Component({
  selector: 'app-c4-lyrics-splash',
  templateUrl: './c4-lyrics-splash.component.html',
  styleUrls: ['./c4-lyrics-splash.component.scss'],
  animations: [
    trigger('splash', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.3s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class C4LyricsSplashComponent implements OnInit, AfterContentChecked {
  isLoading: boolean = false;
  constructor(private apiEventService: ApiEventService,
              private cdref: ChangeDetectorRef) {}


  ngOnInit() {
    this.subscribeToApiEvents();
  }

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

  subscribeToApiEvents() {
    this.apiEventService.event
      .pipe(untilDestroyed(this))
      .subscribe((event: ApiEvent) => {
        if (event && event.spinner !== undefined) {
          this.isLoading =
            event.spinner && event.status === ApiEventStatus.IN_PROGRESS;
        } else if (event) {
          this.isLoading = event.status === ApiEventStatus.IN_PROGRESS;
        }
        this.cdref.detectChanges();
      });
  }

}
