import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardOptionComponent } from './wizard-option.component';

describe('WizardOptionComponent', () => {
  let component: WizardOptionComponent;
  let fixture: ComponentFixture<WizardOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
