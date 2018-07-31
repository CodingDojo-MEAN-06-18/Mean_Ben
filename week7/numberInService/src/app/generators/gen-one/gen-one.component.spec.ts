import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenOneComponent } from './gen-one.component';

describe('GenOneComponent', () => {
  let component: GenOneComponent;
  let fixture: ComponentFixture<GenOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
