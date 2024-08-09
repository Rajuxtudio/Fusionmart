import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderQuickActionComponent } from './header-quick-action.component';

describe('HeaderQuickActionComponent', () => {
  let component: HeaderQuickActionComponent;
  let fixture: ComponentFixture<HeaderQuickActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderQuickActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderQuickActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
