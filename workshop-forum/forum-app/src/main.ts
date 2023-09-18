import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { Observable, Subject, take } from 'rxjs';
// const subject$$ = new Subject();

// const observable$ = new Observable((observer) => {
//   let counter = 0;
//   const id = setInterval(() => {
//     observer.next(counter++);
//   }, 1000);

//   // we need to clear Interval to make sure we do not have memory leaks
//   return () => {
//     clearInterval(id);
//   };
// });

// // subscribtion in the context of Observable is called observer. This is cold observable - which means that no matter how many times we subscribe - we will always start from the beggining. While hot observable allows only one subscribtion and if someone subscribes later they will start from the position the subject is at. Ex: streaming platform, where everyone can watch the same movie at different time and cinema projection - where if you are late you will miss part of the movie

// observable$.subscribe(subject$$);

// const subscribtion1 = observable$.subscribe({
//   next: (value) => {
//     console.log('sub1', value);
//   },
//   complete: () => console.log('Completed 1'),
// });

// const hotSubscribtion = subject$$.subscribe({
//   next: (value) => console.log('hotSub', value),
//   complete: () => console.log('Completed hotSub'),
// });

// setTimeout(() => {
//   subscribtion1.unsubscribe();
//   hotSubscribtion.unsubscribe();

//   observable$.pipe(take(3)).subscribe({
//     next: (value) => {
//       console.log('sub2', value);
//     },
//     complete: () => console.log('Completed 2'),
//   });

//   subject$$.pipe(take(3)).subscribe({
//     next: (value) => {
//       console.log('hotSub2', value);
//     },
//     complete: () => console.log('Completed hotSub2')
//   });
// }, 2000);
