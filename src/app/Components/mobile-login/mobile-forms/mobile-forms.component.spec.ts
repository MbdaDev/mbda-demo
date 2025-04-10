import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFormsComponent } from './mobile-forms.component';

describe('MobileFormsComponent', () => {
  let component: MobileFormsComponent;
  let fixture: ComponentFixture<MobileFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
