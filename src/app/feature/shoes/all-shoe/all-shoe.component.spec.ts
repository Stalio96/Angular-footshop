import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShoeComponent } from './all-shoe.component';

describe('AllShoeComponent', () => {
  let component: AllShoeComponent;
  let fixture: ComponentFixture<AllShoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllShoeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
