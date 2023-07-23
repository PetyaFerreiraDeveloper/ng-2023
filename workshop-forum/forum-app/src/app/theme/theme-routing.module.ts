import { RouterModule, Routes } from "@angular/router";
// import { ThemeListComponent } from "./theme-list/theme-list.component";
import { NewThemeComponent } from "./new-theme/new-theme.component";

const routes: Routes = [
    {
        path: 'theme',
        children: [
            // {
            //     path: 'list',
            //     component: ThemeListComponent
            // }
            {
                path: 'new',
                component: NewThemeComponent
            }
        ]
    }
]

export const ThemeRoutingModule = RouterModule.forChild(routes)