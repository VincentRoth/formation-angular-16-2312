import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CurrentUserService } from './current-user.service';

export const hasRightGuard: CanActivateFn = (route, state) => {
  const currentUserService = inject(CurrentUserService);
  return currentUserService.hasRight(route.data['right']);
};
