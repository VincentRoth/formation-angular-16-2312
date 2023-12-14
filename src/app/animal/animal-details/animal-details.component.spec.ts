import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnimalDetailsComponent } from './animal-details.component';
import { SharedModule } from '../../shared/shared.module';

describe('AnimalDetailsComponent', () => {
  let component: AnimalDetailsComponent;
  let fixture: ComponentFixture<AnimalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
    });
    fixture = TestBed.createComponent(AnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
