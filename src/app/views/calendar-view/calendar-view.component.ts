import { Component, EventEmitter, OnInit, Output, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CalendarDateFormatter, CalendarEvent, CalendarView } from 'angular-calendar';
import  add from 'date-fns/add';
import { Observable } from 'rxjs';
import { CalendarEventWithMeta } from 'src/app/model/calendar/calendarEventWithMeta';
import { HolidaysService } from 'src/app/services/calendar/holidays.service';

@Component({
  selector: 'app-calendar-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css'],
})
export class CalendarViewComponent implements OnInit {

    locale: string = 'es-MX';
    viewDate: Date = new Date();
    events: CalendarEventWithMeta[] = [];
    view: CalendarView = CalendarView.Month;
    request: Observable<any>;

    constructor(private holidaysService : HolidaysService, private cdr : ChangeDetectorRef) { }

    ngOnInit(): void {
        this.holidaysService.fetchHolidays().subscribe(({ holidays }) => {
            this.events = holidays.map((holiday : any) => {
              return {
                start: add(new Date(holiday.date), {years: 1}),
                title: holiday.name,
                allDay: true,
                meta: {
                  type: 'holiday',
                  holiday,
                },
              };
            });
            this.cdr.markForCheck();
      });
    }
}
