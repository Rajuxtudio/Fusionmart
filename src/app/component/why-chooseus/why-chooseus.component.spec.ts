import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseusComponent } from './why-chooseus.component';

describe('WhyChooseusComponent', () => {
  let component: WhyChooseusComponent;
  let fixture: ComponentFixture<WhyChooseusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChooseusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChooseusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
