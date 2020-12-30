import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface EventMessage {
  text: string;
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private successSource = new Subject<EventMessage>();
  private errorSource = new Subject<EventMessage>();
  private messageSource = new Subject<EventMessage>();

  public success = this.successSource.asObservable();
  public error = this.errorSource.asObservable();
  public message = this.messageSource.asObservable();


  public sendError(error: EventMessage) {
    this.errorSource.next(error);
  }

  public sendSuccess(success: EventMessage) {
    this.successSource.next(success);
  }

  public sendMessage(message: EventMessage) {
    this.messageSource.next(message);
  }
}
