import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCComponent } from './ajout-c.component';

describe('AjoutCComponent', () => {
  let component: AjoutCComponent;
  let fixture: ComponentFixture<AjoutCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
