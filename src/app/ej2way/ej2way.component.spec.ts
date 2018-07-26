import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej2wayComponent } from './ej2way.component';

describe('Ej2wayComponent', () => {
  let component: Ej2wayComponent;
  let fixture: ComponentFixture<Ej2wayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej2wayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej2wayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
