import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWizardComponent } from './template-wizard.component';

describe('TemplateWizardComponent', () => {
  let component: TemplateWizardComponent;
  let fixture: ComponentFixture<TemplateWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
