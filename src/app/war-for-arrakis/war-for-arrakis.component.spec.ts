import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarForArrakisComponent } from './war-for-arrakis.component';

describe('WarForArrakisComponent', () => {
  let component: WarForArrakisComponent;
  let fixture: ComponentFixture<WarForArrakisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarForArrakisComponent]
    });
    fixture = TestBed.createComponent(WarForArrakisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
