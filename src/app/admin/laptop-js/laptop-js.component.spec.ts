import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopJSComponent } from './laptop-js.component';

describe('LaptopJSComponent', () => {
  let component: LaptopJSComponent;
  let fixture: ComponentFixture<LaptopJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopJSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
