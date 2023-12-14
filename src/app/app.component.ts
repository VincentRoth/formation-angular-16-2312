import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrentUserService } from './shared/auth/current-user.service';
import { Right } from './shared/auth/right';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  hasVetAccess: boolean;
  langChoices: string[];
  langIndex: number;
  title = 'veterinarian2312';
  private intervalRef: any;

  constructor(
    private currentUserService: CurrentUserService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.hasVetAccess = this.currentUserService.hasRight(Right.VET_GET);

    this.langIndex = 0;
    this.translateService
      .get('langChoice')
      .subscribe((langChoices: string[]) => {
        this.langChoices = langChoices;
      });

    this.intervalRef = setInterval(() => {
      this.langIndex++;
      if (!this.langChoices || this.langIndex >= this.langChoices?.length) {
        this.langIndex = 0;
      }
    }, 2_000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }

  changeLang(lang: string): void {
    if (this.translateService.langs.includes(lang)) {
      this.translateService.use(lang);
    }
  }
}
