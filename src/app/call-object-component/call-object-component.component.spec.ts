import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallObjectComponentComponent } from './call-object-component.component';

describe('CallObjectComponentComponent', () => {
  let component: CallObjectComponentComponent;
  let fixture: ComponentFixture<CallObjectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallObjectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallObjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
