import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauClientComponent } from './tableau-client.component';

describe('TableauClientComponent', () => {
  let component: TableauClientComponent;
  let fixture: ComponentFixture<TableauClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
