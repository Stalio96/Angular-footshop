import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./page/profile/profile.component";
import { AddShoeComponent } from "./shoes/add-shoe/add-shoe.component";
import { AllShoeComponent } from "./shoes/all-shoe/all-shoe.component";
import { DetailShoeComponent } from "./shoes/detail-shoe/detail-shoe.component";
import { EditShoeComponent } from "./shoes/edit-shoe/edit-shoe.component";

const routes: Routes = [
    { path: 'add', component: AddShoeComponent },
    { path: 'all', component: AllShoeComponent },
    { path: 'profile/:id', component: ProfileComponent },
    { path: 'detail/:id', component: DetailShoeComponent },
    { path: 'edit/:id', component: EditShoeComponent }
]

export const ShoeRoutingModule = RouterModule.forChild(routes);