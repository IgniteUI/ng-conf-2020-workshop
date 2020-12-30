import { Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IgxToastComponent } from 'igniteui-angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnDestroy {

  private destroy$ = new Subject();

  @ViewChild('toast', { static: true })
  private toast: IgxToastComponent;

  constructor(private eventBus: EventBusService) {
    this.eventBus.success.pipe(takeUntil(this.destroy$)).subscribe(m => this.showMessage(m.text));
    this.eventBus.error.pipe(takeUntil(this.destroy$)).subscribe(m => this.showMessage(m.text, true));
    this.eventBus.message.pipe(takeUntil(this.destroy$)).subscribe(m => this.showMessage(m.text));
  }

  public errorState = false;

  public showMessage(message: string, error = false) {
    this.errorState = error;
    this.toast.show(message);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
