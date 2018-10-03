import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraPolacionComponent } from './extra-polacion.component';

describe('ExtraPolacionComponent', () => {
  let component: ExtraPolacionComponent;
  let fixture: ComponentFixture<ExtraPolacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraPolacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraPolacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
