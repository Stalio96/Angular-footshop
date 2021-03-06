import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './page/search/search.component';
import { RouterModule } from '@angular/router';
import { AddShoeComponent } from './shoes/add-shoe/add-shoe.component';
import { ShoeService } from './shoe.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoeRoutingModule } from './shoe-routing.module';
import { AllShoeComponent } from './shoes/all-shoe/all-shoe.component';
import { ShoeItemComponent } from './shoes/shoe-item/shoe-item.component';
import { DetailShoeComponent } from './shoes/detail-shoe/detail-shoe.component';
import { EditShoeComponent } from './shoes/edit-shoe/edit-shoe.component';
import { ProfileComponent } from './page/profile/profile.component';
import { HomeComponent } from './page/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    AddShoeComponent,
    AllShoeComponent,
    ShoeItemComponent,
    DetailShoeComponent,
    EditShoeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShoeRoutingModule,
    ReactiveFormsModule
  ],
  exports: [SearchComponent, AddShoeComponent],
  providers: []
})
export class FeatureModule {
  static forRoot(): ModuleWithProviders<FeatureModule> {
    return {
      ngModule: FeatureModule,
      providers: [
        ShoeService
      ]
    }
  }
}
