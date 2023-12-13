import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { FormatPhonePipe } from '../../shared/format-phone.pipe';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { AbstractBaseComponent } from '../../shared/abstract-base-component';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss'],
})
export class AnimalDetailsComponent
  extends AbstractBaseComponent
  implements OnInit
{
  animal$?: Observable<Animal>;

  constructor(
    private animalService: AnimalService,
    private formatPhonePipe: FormatPhonePipe,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.animal$ = this.activatedRoute.paramMap.pipe(
      map((params: ParamMap): number => Number(params.get('id'))),
      switchMap((id: number): Observable<Animal> => this.animalService.get(id))
    );
  }
}
