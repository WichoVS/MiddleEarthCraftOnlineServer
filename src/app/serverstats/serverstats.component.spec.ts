import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerstatsComponent } from './serverstats.component';

describe('ServerstatsComponent', () => {
  let component: ServerstatsComponent;
  let fixture: ComponentFixture<ServerstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
