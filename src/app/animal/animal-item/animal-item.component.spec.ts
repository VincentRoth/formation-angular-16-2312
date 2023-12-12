import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalItemComponent } from './animal-item.component';

describe('AnimalItemComponent', () => {
  let component: AnimalItemComponent;
  let fixture: ComponentFixture<AnimalItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalItemComponent]
    });
    fixture = TestBed.createComponent(AnimalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
