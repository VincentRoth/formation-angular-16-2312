import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnimalDetailsComponent } from './animal-details.component';
import { SharedModule } from '../../shared/shared.module';
import { Animal } from '../../shared/api/animal';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AnimalDetailsComponent', () => {
  let component: AnimalDetailsComponent;
  let fixture: ComponentFixture<AnimalDetailsComponent>;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    const paramMap = new Map();
    paramMap.set('id', 1);

    TestBed.configureTestingModule({
      declarations: [AnimalDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(paramMap),
            snapshot: {
              paramMap, // paramMap: paramMap
            },
          },
        },
      ],
    });
    httpCtrl = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(AnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request correct animal fo a given ID', () => {
    const requestCtrl = httpCtrl.expectOne('/api/animals/1');
    const animal: Animal = { id: 1, name: 'Name', species: 'Species' };
    requestCtrl.flush(animal);

    // Oups component.animal$ est un observable, on doit regarder dans le template
    // Template
    fixture.detectChanges();
    const template: HTMLElement = fixture.nativeElement;
    expect(template.querySelector('p')).toBeTruthy();
  });
});
