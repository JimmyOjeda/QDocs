import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionComponent } from './option.component';

describe('OptionComponent', () => {
  let option: OptionComponent;
  let fixture: ComponentFixture<OptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionComponent);
    option = fixture.componentInstance;
    option.option = {
      "title" : "Diccionario 01",
      "link" : "enlace"
    };
    option.imageSource = "../assets/Images/diccionarioblack.png";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(option).toBeTruthy();
  });
});
