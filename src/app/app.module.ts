import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
//import { environment } from '../environments/environment';
//import { provideAuth,getAuth } from '@angular/fire/auth';
//import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './feature/page/home/home.component';
import { AppRouterModule } from './app-routing.module';
//import { AngularFireModule } from '@angular/fire/compat';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AddShoeComponent } from './feature/shoes/add-shoe/add-shoe.component';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [
    AppComponent
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
