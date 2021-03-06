import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponentsComponent } from './nav-components.component';

describe('NavComponentsComponent', () => {
  let component: NavComponentsComponent;
  let fixture: ComponentFixture<NavComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
