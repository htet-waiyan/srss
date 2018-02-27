import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisesetmainComponent } from './risesetmain.component';

describe('RisesetmainComponent', () => {
  let component: RisesetmainComponent;
  let fixture: ComponentFixture<RisesetmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisesetmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisesetmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
