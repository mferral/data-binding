import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjpropiedadComponent } from './ejpropiedad.component';

describe('EjpropiedadComponent', () => {
  let component: EjpropiedadComponent;
  let fixture: ComponentFixture<EjpropiedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjpropiedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjpropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
