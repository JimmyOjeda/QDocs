import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordWizardComponent } from './record-wizard.component';

describe('RecordWizardComponent', () => {
  let component: RecordWizardComponent;
  let fixture: ComponentFixture<RecordWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
