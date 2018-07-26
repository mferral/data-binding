import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjeventoComponent } from './ejevento.component';

describe('EjeventoComponent', () => {
  let component: EjeventoComponent;
  let fixture: ComponentFixture<EjeventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjeventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
