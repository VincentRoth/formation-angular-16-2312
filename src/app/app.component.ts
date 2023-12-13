import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from './shared/auth/current-user.service';
import { Right } from './shared/auth/right';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hasVetAccess: boolean;
  title = 'veterinarian2312';

  constructor(private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    this.hasVetAccess = this.currentUserService.hasRight(Right.VET_GET);
  }
}
