import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyaTituloComponent } from './apoya-titulo.component';

describe('ApoyaTituloComponent', () => {
  let component: ApoyaTituloComponent;
  let fixture: ComponentFixture<ApoyaTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoyaTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoyaTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
