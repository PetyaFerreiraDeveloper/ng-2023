import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// interface IRender<T> {
//   createTextElement(content: string): T;
// }

// class DOMRenderer implements IRender<HTMLElement> {
//   private createElement(elementType: string, content: string) {
//     const el = document.createElement(elementType);
//     el.textContent = content;
//     return el;
//   }

//   createTextElement(content: string): HTMLElement {
//     return this.createElement('p', content);
//   }
// }

// class MarkDownRender implements IRender<any>{
//   createTextElement(content: string) {
//     return '```' + content + '```'
//   }
// }

// const render = new DOMRenderer();
// render.createTextElement('Hell Word');
