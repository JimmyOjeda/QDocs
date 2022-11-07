import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateDocsCompleteComponent } from './generate-docs-complete.component';

describe('GenerateDocsCompleteComponent', () => {
  let component: GenerateDocsCompleteComponent;
  let fixture: ComponentFixture<GenerateDocsCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateDocsCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateDocsCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
