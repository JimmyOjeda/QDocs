import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDataModalComponent } from './database-data-modal.component';

describe('DatabaseDataModalComponent', () => {
  let component: DatabaseDataModalComponent;
  let fixture: ComponentFixture<DatabaseDataModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseDataModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
