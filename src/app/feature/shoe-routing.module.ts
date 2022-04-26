import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { ProfileComponent } from "./page/profile/profile.component";
import { AddShoeComponent } from "./shoes/add-shoe/add-shoe.component";
import { AllShoeComponent } from "./shoes/all-shoe/all-shoe.component";
import { DetailShoeComponent } from "./shoes/detail-shoe/detail-shoe.component";
import { EditShoeComponent } from "./shoes/edit-shoe/edit-shoe.component";

const routes: Routes = [
    { path: 'all', component: AllShoeComponent },
    { path: 'add', canActivate: [AuthGuard], component: AddShoeComponent },
    { path: 'profile/:id', canActivate: [AuthGuard], component: ProfileComponent },
    { path: 'detail/:id', canActivate: [AuthGuard], component: DetailShoeComponent },
    { path: 'edit/:id', canActivate: [AuthGuard], component: EditShoeComponent }
]

export const ShoeRoutingModule = RouterModule.forChild(routes);