import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsAddEditComponent } from './subjects-add-edit.component';

describe('SubjectsAddEditComponent', () => {
  let component: SubjectsAddEditComponent;
  let fixture: ComponentFixture<SubjectsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
