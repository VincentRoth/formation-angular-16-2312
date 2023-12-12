import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
  standalone: true,
  imports: [NgClass, NgForOf],
})
export class AnimalListComponent implements OnInit {
  animals?: Animal[];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animals = this.animalService.getAll();
  }

  trackById: TrackByFunction<Animal> = (_index: number, item: Animal): number =>
    item.id;
}
