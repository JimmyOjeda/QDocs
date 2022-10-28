import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseOptionComponent } from './database-option.component';

describe('DatabaseOptionComponent', () => {
  let component: DatabaseOptionComponent;
  let fixture: ComponentFixture<DatabaseOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
