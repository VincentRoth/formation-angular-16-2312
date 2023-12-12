import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { FormatPhonePipe } from '../../shared/format-phone.pipe';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss'],
})
export class AnimalDetailsComponent implements OnInit {
  animal?: Animal;

  constructor(
    private animalService: AnimalService,
    private formatPhonePipe: FormatPhonePipe,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params: ParamMap): number => Number(params.get('id'))),
        switchMap(
          (id: number): Observable<Animal> => this.animalService.get(id)
        )
      )
      .subscribe((data) => (this.animal = data));
  }
}
