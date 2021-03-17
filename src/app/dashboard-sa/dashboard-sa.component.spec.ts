import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSAComponent } from './dashboard-sa.component';

describe('DashboardSAComponent', () => {
  let component: DashboardSAComponent;
  let fixture: ComponentFixture<DashboardSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
