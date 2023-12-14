import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { VetListComponent } from './vet-list.component';

describe('VetListComponent', () => {
  let component: VetListComponent;
  let fixture: ComponentFixture<VetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(VetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
