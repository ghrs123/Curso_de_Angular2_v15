import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForms2Component } from './reactive-forms2.component';

describe('ReactiveForms2Component', () => {
  let component: ReactiveForms2Component;
  let fixture: ComponentFixture<ReactiveForms2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveForms2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveForms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
