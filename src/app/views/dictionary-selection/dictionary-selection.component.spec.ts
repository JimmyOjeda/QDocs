import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionarySelectionComponent } from './dictionary-selection.component';

describe('DictionarySelectionComponent', () => {
  let component: DictionarySelectionComponent;
  let fixture: ComponentFixture<DictionarySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionarySelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictionarySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
