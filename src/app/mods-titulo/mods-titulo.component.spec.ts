import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsTituloComponent } from './mods-titulo.component';

describe('ModsTituloComponent', () => {
  let component: ModsTituloComponent;
  let fixture: ComponentFixture<ModsTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModsTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModsTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
