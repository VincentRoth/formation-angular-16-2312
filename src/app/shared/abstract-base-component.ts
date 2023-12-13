import { Directive, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class AbstractBaseComponent implements OnInit, OnDestroy {
  protected unsubscribeAll$: Subject<void>;

  ngOnInit(): void {
    this.unsubscribeAll$ = new Subject();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }
}
