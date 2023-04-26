import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfyCamraComponent } from './selfy-camra.component';

describe('SelfyCamraComponent', () => {
  let component: SelfyCamraComponent;
  let fixture: ComponentFixture<SelfyCamraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfyCamraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfyCamraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
