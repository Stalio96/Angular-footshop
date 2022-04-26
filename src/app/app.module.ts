import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
//import { environment } from '../environments/environment';
//import { provideAuth,getAuth } from '@angular/fire/auth';
//import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//import { SearchComponent } from './feature/page/search/search.component';
import { AppRouterModule } from './app-routing.module';
//import { AngularFireModule } from '@angular/fire/compat';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AddShoeComponent } from './feature/shoes/add-shoe/add-shoe.component';
import { FeatureModule } from './feature/feature.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
//import { HomeComponent } from './feature/page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    //HomeComponent
    //SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    CoreModule.forRoot(),
    FeatureModule.forRoot(),
    AuthModule,
    //AngularFireModule.initializeApp(environment.firebase),
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
