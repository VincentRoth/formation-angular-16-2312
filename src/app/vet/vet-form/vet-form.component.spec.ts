import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetFormComponent } from './vet-form.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Veterinarian } from '../../shared/api/veterinarian';

describe('VetFormComponent', () => {
  let component: VetFormComponent;
  let fixture: ComponentFixture<VetFormComponent>;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    const paramMap = new Map();
    paramMap.set('id', 1);

    TestBed.configureTestingModule({
      declarations: [VetFormComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(paramMap),
            snapshot: {
              paramMap,
            },
          },
        },
      ],
    });
    httpCtrl = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(VetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the value on modification', () => {
    const requestCtrl = httpCtrl.expectOne('/api/veterinarians/1');
    const vet: Veterinarian = {
      id: 1,
      firstName: 'FirstName',
      lastName: 'LastName',
    };
    requestCtrl.flush(vet);

    expect(component.vetForm.get('firstName').value).toBe(vet.firstName);

    // Template
    fixture.detectChanges();
    const template: HTMLElement = fixture.nativeElement;
    expect(
      (template.querySelector('#firstName') as HTMLInputElement).value
    ).toBe(vet.firstName);
  });
});
