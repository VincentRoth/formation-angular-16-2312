import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('animalForm') animalForm: NgForm;

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

  onNameChange(): void {
    console.log('name change', this.animal.name);
  }

  onSubmit(): void {
    if (this.animalForm.form.invalid) {
      return;
    }

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
