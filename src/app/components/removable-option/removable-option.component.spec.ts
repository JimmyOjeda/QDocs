import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovableOptionComponent } from './removable-option.component';

describe('RemovableOptionComponent', () => {
  let removableOption: RemovableOptionComponent;
  let fixture: ComponentFixture<RemovableOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovableOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovableOptionComponent);
    removableOption = fixture.componentInstance;
    removableOption.option = {
      id:1,
      name: "BD1",
      direction: "192",
      port: "8080",
      user: "user1",
      password: "password1"
      
    };
    removableOption.imageSource = "../assets/Images/plantillas-black.png";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(removableOption).toBeTruthy();
  });
});
