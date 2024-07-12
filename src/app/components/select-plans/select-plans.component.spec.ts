import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlansComponent } from './select-plans.component';

describe('SelectPlansComponent', () => {
  let component: SelectPlansComponent;
  let fixture: ComponentFixture<SelectPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
