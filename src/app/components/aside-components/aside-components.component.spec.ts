import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideComponentsComponent } from './aside-components.component';

describe('AsideComponentsComponent', () => {
  let component: AsideComponentsComponent;
  let fixture: ComponentFixture<AsideComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
