import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutStatusComponent } from './without-status.component';

describe('WithoutStatusComponent', () => {
  let component: WithoutStatusComponent;
  let fixture: ComponentFixture<WithoutStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
