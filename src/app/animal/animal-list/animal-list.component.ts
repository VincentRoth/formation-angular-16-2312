import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {
  animals?: Animal[];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.refreshData();
  }

  onItemDeletion(animal: Animal): void {
    this.animalService.delete(animal.id).subscribe(() => this.refreshData());
  }

  trackById: TrackByFunction<Animal> = (_index: number, item: Animal): number =>
    item.id;

  private refreshData(): void {
    this.animalService.getAll().subscribe((data) => (this.animals = data));
  }
}
