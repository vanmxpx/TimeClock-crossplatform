import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
    { path: '', loadChildren: './menu/menu.module#MenuPageModule' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
      ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
