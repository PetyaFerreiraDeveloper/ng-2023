import { RouterModule, Routes } from '@angular/router';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { MainComponent } from './main/main.component';
import { ThemeResolver } from './resolvers/theme.resolver';

const routes: Routes = [
  {
    path: 'recent',
    component: MainComponent,
  },
  {
    path: 'new',
    component: NewThemeComponent,
  },
  {
    path: 'detail/:id',
    resolve: {
      theme: ThemeResolver,
    },
    component: ThemeDetailComponent,
  },
];

export const ThemeRoutingModule = RouterModule.forChild(routes);
