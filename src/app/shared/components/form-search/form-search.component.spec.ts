import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchComponent } from './form-search.component';

describe('FormSearchComponent', () => {
  let component: FormSearchComponent;
  let fixture: ComponentFixture<FormSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
