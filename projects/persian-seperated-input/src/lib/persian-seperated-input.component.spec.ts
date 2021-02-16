import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersianSeperatedInputComponent } from './persian-seperated-input.component';

describe('PersianSeperatedInputComponent', () => {
  let component: PersianSeperatedInputComponent;
  let fixture: ComponentFixture<PersianSeperatedInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersianSeperatedInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersianSeperatedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
