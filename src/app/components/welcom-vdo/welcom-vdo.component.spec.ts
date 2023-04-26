import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomVdoComponent } from './welcom-vdo.component';

describe('WelcomVdoComponent', () => {
  let component: WelcomVdoComponent;
  let fixture: ComponentFixture<WelcomVdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomVdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomVdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
