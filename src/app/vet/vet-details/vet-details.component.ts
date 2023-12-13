import { Component } from '@angular/core';
import { Veterinarian } from '../../shared/api/veterinarian';
import { VeterinarianService } from '../../shared/api/veterinarian.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AbstractBaseComponent } from '../../shared/abstract-base-component';
import { map, Observable, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-vet-details',
  templateUrl: './vet-details.component.html',
  styleUrls: ['./vet-details.component.scss'],
})
export class VetDetailsComponent extends AbstractBaseComponent {
  vet?: Veterinarian;

  constructor(
    private vetService: VeterinarianService,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.activatedRoute.paramMap
      .pipe(
        map((params: ParamMap): number => Number(params.get('id'))),
        switchMap(
          (id: number): Observable<Veterinarian> => this.vetService.get(id)
        ),
        takeUntil(this.unsubscribeAll$)
      )
      .subscribe((data) => (this.vet = data));
  }
}
