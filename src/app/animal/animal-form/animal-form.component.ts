import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  animal: Animal;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (id) {
      this.animalService.get(id).subscribe((data) => (this.animal = data));
    } else {
      this.animal = { name: '', species: '' };
    }
  }

  onSubmit(): void {
    this.animalService.save(this.animal).subscribe({
      next: (data) => {
        // do something
      },
      complete: () => {
        this.router.navigate(['/animals']);
      },
      error: (error) => {
        // do something
      },
    });
  }
}
