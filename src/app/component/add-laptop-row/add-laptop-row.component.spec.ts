import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLaptopRowComponent } from './add-laptop-row.component';

describe('AddLaptopRowComponent', () => {
  let component: AddLaptopRowComponent;
  let fixture: ComponentFixture<AddLaptopRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLaptopRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLaptopRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
