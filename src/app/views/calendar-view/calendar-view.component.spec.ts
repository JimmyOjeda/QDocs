import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarDatePipe } from 'angular-calendar/modules/common/calendar-date.pipe';

import { CalendarViewComponent } from './calendar-view.component';

describe('CalendarViewComponent', () => {
  let component: CalendarViewComponent;
  let fixture: ComponentFixture<CalendarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CalendarViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});