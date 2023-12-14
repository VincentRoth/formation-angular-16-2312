import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { VetDetailsComponent } from './vet-details.component';

describe('VetDetailsComponent', () => {
  let component: VetDetailsComponent;
  let fixture: ComponentFixture<VetDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(VetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
