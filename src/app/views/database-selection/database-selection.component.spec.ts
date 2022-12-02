import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseSelectionComponent } from './database-selection.component';

describe('DatabaseSelectionComponent', () => {
  let databaseSelection: DatabaseSelectionComponent;
  let fixture: ComponentFixture<DatabaseSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseSelectionComponent);
    databaseSelection = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(databaseSelection).toBeTruthy();
  });

  it('should make CRUD', () => {
    let testData = {
      name: "BD2 de prueba",
      direction: "192",
      port: "8080",
      user: "user1",
      password: "password1"
    };
    databaseSelection.databaseForm.patchValue(testData);
    databaseSelection.selectOptionService.optionSelected = 2;
    databaseSelection.saveDatabaseConfiguration();
    expect(databaseSelection.manageDatabasesService.readDatabase(2).name).toEqual(testData.name);
  });
});
