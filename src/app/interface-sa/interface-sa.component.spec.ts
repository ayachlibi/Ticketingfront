import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceSAComponent } from './interface-sa.component';

describe('InterfaceSAComponent', () => {
  let component: InterfaceSAComponent;
  let fixture: ComponentFixture<InterfaceSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceSAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
