import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnimalItemComponent } from './animal-item.component';

describe('AnimalItemComponent', () => {
  let component: AnimalItemComponent;
  let fixture: ComponentFixture<AnimalItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalItemComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(AnimalItemComponent);
    component = fixture.componentInstance;
    component.model = { id: 1, name: 'Name', species: 'Species' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
