import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// import { BehaviorSubject, distinctUntilChanged, filter, map, scan } from 'rxjs';

// // SYNCHRONOUS EXAMPLE FOR REDUCER

// const initialState = {
//   arr: null,
//   obj: null,
//   count: 0,
// };

// function reducer(state: any, action: any) {
//   if (action.type === 'EVENT_1') {
//     return {
//       ...state,
//       arr: action.value,
//     };
//   }
//   if (action.type === 'EVENT_2') {
//     return {
//       ...state,
//       obj: action.value,
//     };
//   }

//   if (action.type === 'EVENT_3') {
//     return {
//       ...state,
//       count: action.value,
//     };
//   }
// }

// // const result = [
// //   { type: 'EVENT_1', value: [1, 2, 3] },
// //   { type: 'EVENT_2', value: { a: 1 } },
// //   { type: 'EVENT_3', value: 3 },
// // ].reduce(reducer, initialState);

// // ASYNCHRONOUS EXAMPLE

// interface IState {
//   arr: number[] | null;
//   obj: { test: number } | null;
//   count: number;
// }

// function getState(initialState: IState, reducer: any) {
//   const state$$ = new BehaviorSubject<IState | null>(null);
//   return {
//     state$: state$$.asObservable().pipe(
//       filter((val) => !!val),
//       scan(reducer, initialState)
//     ),
//     dispatch: (action: any) => {
//       state$$.next(action);
//     },
//   };
// }

// const { state$, dispatch } = getState(initialState, reducer);

// state$.subscribe(console.log);
// // distinctUntilChanged will only show us if there is actual change
// state$
//   .pipe(
//     map((state) => state.count),
//     distinctUntilChanged()
//   )
//   .subscribe(console.log);

// dispatch({ type: 'EVENT_1', value: [1, 2, 3] });

// setTimeout(() => {
//   dispatch({ type: 'EVENT_1', value: [1, 2, 3] });

//   setTimeout(() => {
//     dispatch({ type: 'EVENT_3', value: 1000 });
//   }, 5000);
// });
