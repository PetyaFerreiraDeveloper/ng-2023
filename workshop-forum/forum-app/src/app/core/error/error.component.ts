import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, take, debounceTime, filter } from 'rxjs';
import { API_ERROR } from 'src/app/shared/constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit, OnDestroy {
  apiError$ = this.apiError.asObservable();
  constructor(
    @Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>,
    private router: Router
  ) {
    this.apiError$
      .pipe(
        debounceTime(0),
        take(1),
        filter((val) => !val)
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
  ngOnInit(): void {
    // this.apiError.next(null)
  }
  ngOnDestroy(): void {
    this.apiError.next(null)
    // throw new Error('Method not implemented.');
  }
}
