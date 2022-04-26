import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SearchComponent } from './feature/page/search/search.component';
import { HomeComponent } from './feature/page/home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'search', component: SearchComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent}
];

//@NgModule({
//    declarations: [LoginComponent],
//    imports: [RouterModule.forRoot(routes)],
//    exports: [RouterModule]
//})
export const AppRouterModule = RouterModule.forRoot(routes)