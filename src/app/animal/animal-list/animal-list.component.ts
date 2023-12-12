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
    this.animals = this.animalService.getAll();
  }

  onItemDeletion(animal: Animal): void {
    const index = this.animals.indexOf(animal);
    this.animals.splice(index, 1);
  }

  trackById: TrackByFunction<Animal> = (_index: number, item: Animal): number =>
    item.id;
}
