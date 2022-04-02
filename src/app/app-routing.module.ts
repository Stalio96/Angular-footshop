import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './feature/page/home/home.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent }
];

//@NgModule({
//    declarations: [LoginComponent],
//    imports: [RouterModule.forRoot(routes)],
//    exports: [RouterModule]
//})
export const AppRouterModule = RouterModule.forRoot(routes)