import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisesetComponent } from './riseset.component';

describe('RisesetComponent', () => {
  let component: RisesetComponent;
  let fixture: ComponentFixture<RisesetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisesetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
