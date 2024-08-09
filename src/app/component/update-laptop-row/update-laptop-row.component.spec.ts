import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLaptopRowComponent } from './update-laptop-row.component';

describe('UpdateLaptopRowComponent', () => {
  let component: UpdateLaptopRowComponent;
  let fixture: ComponentFixture<UpdateLaptopRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLaptopRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLaptopRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
