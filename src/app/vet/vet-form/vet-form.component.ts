import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VeterinarianService } from '../../shared/api/veterinarian.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinarian } from '../../shared/api/veterinarian';

interface VetFormType {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
}

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit {
  vetForm: FormGroup<VetFormType>;
  private id: number;

  constructor(
    private vetService: VeterinarianService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (id) {
      this.vetService.get(id).subscribe((data) => {
        this.id = data.id;
        this.initForm(data);
      });
    } else {
      this.initForm();
    }
  }

  onSubmit(): void {
    if (this.vetForm.invalid) {
      return;
    }

    const formData: Veterinarian = this.vetForm.getRawValue();
    formData.id = this.id;
    this.vetService.save(formData).subscribe(() => {
      this.router.navigate(['/vets']);
    });
  }

  private initForm(
    data: Veterinarian = {
      firstName: '',
      lastName: '',
    }
  ): void {
    this.vetForm = new FormGroup({
      firstName: new FormControl(data.firstName, [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl(data.lastName, [Validators.required]),
    });
  }
}
