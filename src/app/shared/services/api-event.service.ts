import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiEvent } from "../models/api-event";

@Injectable({
    providedIn: 'root',
})
export class ApiEventService {
    private currentEvent = new BehaviorSubject<ApiEvent>(undefined);
  
    sendEvent(event: ApiEvent) {
      this.currentEvent.next(event);
    }
  
    get event(): Observable<ApiEvent> {
      return this.currentEvent.asObservable();
    }
}
  