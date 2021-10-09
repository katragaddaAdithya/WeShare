import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsTabComponent } from './subjects-tab.component';

describe('SubjectsTabComponent', () => {
  let component: SubjectsTabComponent;
  let fixture: ComponentFixture<SubjectsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
