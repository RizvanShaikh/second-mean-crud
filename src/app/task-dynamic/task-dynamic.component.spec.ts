import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDynamicComponent } from './task-dynamic.component';

describe('TaskDynamicComponent', () => {
  let component: TaskDynamicComponent;
  let fixture: ComponentFixture<TaskDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
