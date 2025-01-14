import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAutorizedComponent } from './not-autorized.component';

describe('NotAutorizedComponent', () => {
  let component: NotAutorizedComponent;
  let fixture: ComponentFixture<NotAutorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotAutorizedComponent]
    });
    fixture = TestBed.createComponent(NotAutorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
