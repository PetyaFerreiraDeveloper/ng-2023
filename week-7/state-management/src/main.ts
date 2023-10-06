// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

const initialState = {
  arr: null,
  obj: undefined,
  count: 0,
};

function reducer(state: any, action: any) {
  if (action.type === 'EVENT_1') {
    return {
      ...state,
      arr: action.value,
    };
  }
  if (action.type === 'EVENT_2') {
    return {
      ...state,
      obj: action.value,
    };
  }

  if (action.type === 'EVENT_3') {
    return {
      ...state,
      count: action.value,
    };
  }
}

const result = [
  { type: 'EVENT_1', value: [1, 2, 3] },
  { type: 'EVENT_2', value: { a: 1 } },
  { type: 'EVENT_3', value: 3 },
].reduce(reducer, initialState);
