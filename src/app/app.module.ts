import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ObservableComponent } from './components/observable/observable.component';
import { UsersComponent } from './components/users/users.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AuthenticateInterceptor } from "./interceptor/authenticate/authenticate.interceptor";
import { ProductComponent } from './components/product/product.component';

import fr from '@angular/common/locales/fr';
import de from '@angular/common/locales/de';
import { registerLocaleData } from "@angular/common";
import { CacheInterceptor } from "./interceptor/cache/cache.interceptor";

registerLocaleData(fr);
registerLocaleData(de);

@NgModule({
  declarations: [ // composant (view/controller), directive (view), pipe (filtre)
    AppComponent,
    HomeComponent,
    PrivateComponent,
    AuthenticationComponent,
    ObservableComponent,
    UsersComponent,
    UserProfileComponent,
    QuoteComponent,
    ProductComponent
  ],
  imports: [ // module (liste de fonction)
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ // services globale
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticateInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent] // premier composants chargés pour l'app
})
export class AppModule { }
