import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableDeveloperComponent } from './disable-developer.component';

describe('DisableDeveloperComponent', () => {
  let component: DisableDeveloperComponent;
  let fixture: ComponentFixture<DisableDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
