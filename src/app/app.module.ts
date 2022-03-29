import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,} from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './shared/authentication.service';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { FirebaseApp, firebaseApp$ } from '@angular/fire/app';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { AdminModule } from './admin/admin.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(
      {
        apiKey: "AIzaSyBS9gP38WvWxR7FhGHZLqC7gnLT__Oid8c",
        authDomain: "project-angular-sj.firebaseapp.com",
        databaseURL: "https://project-angular-sj-default-rtdb.firebaseio.com",
        projectId: "project-angular-sj",
        storageBucket: "project-angular-sj.appspot.com",
        messagingSenderId: "134456412473",
        appId: "1:134456412473:web:28a1d1c08f6e6d594280e8"
      })),
    provideFirestore(() => getFirestore()),
    AuthModule,
    FormsModule,
    DashboardModule,
    AdminModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    Ng2SearchPipeModule,
    WavesModule,
    CarouselModule,
    NgbModule
    
   
  ],
  providers: [
    AngularFirestoreModule,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
