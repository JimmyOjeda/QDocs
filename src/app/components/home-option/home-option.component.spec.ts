import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOptionComponent } from './home-option.component';

describe('HomeOptionComponent', () => {
  let homeOption: HomeOptionComponent;
  let fixture: ComponentFixture<HomeOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOptionComponent);
    homeOption = fixture.componentInstance;
    homeOption.option = {
      "ImageSource" : "../assets/Images/plantilla.png",
      "Title" : "Plantillas",
      "Link" : "/template-selection"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(homeOption).toBeTruthy;
  });
});
