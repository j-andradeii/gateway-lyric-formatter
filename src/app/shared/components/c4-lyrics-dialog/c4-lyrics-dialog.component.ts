import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ApiEventStatus } from '../../models/api-event';
import { ApiEventService } from '../../services/api-event.service';

@UntilDestroy()
@Component({
  selector: 'app-c4-lyrics-dialog',
  templateUrl: './c4-lyrics-dialog.component.html',
  styleUrls: ['./c4-lyrics-dialog.component.scss']
})
export class C4LyricsDialogComponent implements OnInit {
  showDialog: boolean;
  isError: boolean;
  header: string;
  message: string;
  modal:boolean = false;

  constructor(private apiEventsService: ApiEventService) {}

  ngOnInit(): void {
    this.subscribeToApiEvents();
  }
  
  private subscribeToApiEvents(): void {
    this.apiEventsService.event
      .pipe(untilDestroyed(this))
      .subscribe((event) => {
        if (
          event &&
          !event.toast &&
          event.popup &&
          (event.status === ApiEventStatus.COMPLETED ||
            event.status === ApiEventStatus.ERROR)
        ) {
          this.isError = event.status === ApiEventStatus.ERROR;
          this.header = event.title;
          this.message = event.message;
          this.showDialog = true;
        }
      });
  }

}
