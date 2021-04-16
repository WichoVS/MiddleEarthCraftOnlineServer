import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsDescargaComponent } from './mods-descarga.component';

describe('ModsDescargaComponent', () => {
  let component: ModsDescargaComponent;
  let fixture: ComponentFixture<ModsDescargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModsDescargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModsDescargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
