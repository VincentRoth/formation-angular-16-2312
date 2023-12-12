import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { FormatPhonePipe } from '../../shared/format-phone.pipe';
import { MailToDirective } from '../../shared/mail-to.directive';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss'],
  standalone: true,
  imports: [MailToDirective, FormatPhonePipe],
})
export class AnimalDetailsComponent implements OnInit {
  animal?: Animal;

  constructor(
    private animalService: AnimalService,
    private formatPhonePipe: FormatPhonePipe
  ) {}

  ngOnInit(): void {
    this.animal = this.animalService.get();
  }
}
