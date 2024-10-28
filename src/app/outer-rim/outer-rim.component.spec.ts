import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterRimComponent } from './outer-rim.component';

describe('OuterRimComponent', () => {
  let component: OuterRimComponent;
  let fixture: ComponentFixture<OuterRimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OuterRimComponent]
    });
    fixture = TestBed.createComponent(OuterRimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
