import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesubjectComponent } from './updatesubject.component';

describe('UpdatesubjectComponent', () => {
  let component: UpdatesubjectComponent;
  let fixture: ComponentFixture<UpdatesubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
