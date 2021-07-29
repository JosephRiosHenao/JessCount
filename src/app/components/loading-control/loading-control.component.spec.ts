import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingControlComponent } from './loading-control.component';

describe('LoadingControlComponent', () => {
  let component: LoadingControlComponent;
  let fixture: ComponentFixture<LoadingControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
