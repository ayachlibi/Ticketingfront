import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceAComponent } from './interface-a.component';

describe('InterfaceAComponent', () => {
  let component: InterfaceAComponent;
  let fixture: ComponentFixture<InterfaceAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
