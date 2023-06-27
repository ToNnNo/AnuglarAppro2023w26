import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ObservableComponent } from './components/observable/observable.component';
import { UsersComponent } from './components/users/users.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [ // composant (view/controller), directive (view), pipe (filtre)
    AppComponent,
    HomeComponent,
    PrivateComponent,
    AuthenticationComponent,
    ObservableComponent,
    UsersComponent,
    UserProfileComponent
  ],
  imports: [ // module (liste de fonction)
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [], // services globale
  bootstrap: [AppComponent] // premier composants chargés pour l'app
})
export class AppModule { }
