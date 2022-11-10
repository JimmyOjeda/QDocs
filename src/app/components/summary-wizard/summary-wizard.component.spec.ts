import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryWizardComponent } from './summary-wizard.component';

describe('SummaryWizardComponent', () => {
  let component: SummaryWizardComponent;
  let fixture: ComponentFixture<SummaryWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
