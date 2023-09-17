import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// import { Observable, Subject, map } from 'rxjs';
// create Observable to resolve more than one promises
// $ is used after the variable name to show that we are expecting a stream

// const s$ = new Observable((observer) => {
//   observer.next(100);
//   observer.next(200);
//   observer.next(300);

//   observer.error(new Error('BAD ERROR'));
// });

// s$.pipe(map((a: any) => a + 1)).subscribe({
//   next: (value) => console.log(value),
//   error: (error) => console.error(error),
// });

// const subj$$ = new Subject();

// subj$$.subscribe(console.log);
// subj$$.subscribe(console.log);
// subj$$.subscribe(console.log);
// subj$$.subscribe(console.log);

// subj$$.next(100);

// setTimeout(() => {
//   subj$$.next(200);

//   subj$$.subscribe(console.log);

//   setTimeout(() => {
//     subj$$.next(200);
//   }, 1000);
// }, 1000);
