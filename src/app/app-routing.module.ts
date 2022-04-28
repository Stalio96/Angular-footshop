import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './feature/page/search/search.component';
import { HomeComponent } from './feature/page/home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'search', component: SearchComponent },
    { path: 'home', component: HomeComponent },
    { path: 'user', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    { path: 'shoe', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)},
    { path: '**', component: PageNotFoundComponent}
];

export const AppRouterModule = RouterModule.forRoot(routes);