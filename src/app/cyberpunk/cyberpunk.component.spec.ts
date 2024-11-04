import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberpunkComponent } from './cyberpunk.component';

describe('CyberpunkComponent', () => {
  let component: CyberpunkComponent;
  let fixture: ComponentFixture<CyberpunkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberpunkComponent]
    });
    fixture = TestBed.createComponent(CyberpunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
