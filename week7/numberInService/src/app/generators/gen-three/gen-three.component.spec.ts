import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenThreeComponent } from './gen-three.component';

describe('GenThreeComponent', () => {
  let component: GenThreeComponent;
  let fixture: ComponentFixture<GenThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
