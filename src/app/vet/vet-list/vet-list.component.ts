import { Component, TrackByFunction } from '@angular/core';
import { Veterinarian } from '../../shared/api/veterinarian';
import { VeterinarianService } from '../../shared/api/veterinarian.service';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss'],
})
export class VetListComponent {
  vets?: Veterinarian[];

  constructor(private vetService: VeterinarianService) {}

  ngOnInit(): void {
    this.refreshData();
  }

  onItemDeletion(animal: Veterinarian): void {
    this.vetService.delete(animal.id).subscribe(() => this.refreshData());
  }

  trackById: TrackByFunction<Veterinarian> = (
    _index: number,
    item: Veterinarian
  ): number => item.id;

  private refreshData(): void {
    this.vetService.getAll().subscribe((data) => (this.vets = data));
  }
}
