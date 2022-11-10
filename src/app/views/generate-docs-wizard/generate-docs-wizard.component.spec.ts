import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateDocsWizardComponent } from './generate-docs-wizard.component';

describe('GenerateDocsWizardComponent', () => {
  let component: GenerateDocsWizardComponent;
  let fixture: ComponentFixture<GenerateDocsWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateDocsWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateDocsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
