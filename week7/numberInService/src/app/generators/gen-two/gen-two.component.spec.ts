import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenTwoComponent } from './gen-two.component';

describe('GenTwoComponent', () => {
  let component: GenTwoComponent;
  let fixture: ComponentFixture<GenTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
