import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryBuilderComponent } from './dictionary-builder.component';

describe('DictionaryBuilderComponent', () => {
  let component: DictionaryBuilderComponent;
  let fixture: ComponentFixture<DictionaryBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictionaryBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
