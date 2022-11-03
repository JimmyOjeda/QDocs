import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavBuilderComponent } from './sidenav-builder.component';

describe('SidenavBuilderComponent', () => {
  let component: SidenavBuilderComponent;
  let fixture: ComponentFixture<SidenavBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
