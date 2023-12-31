import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PrivateComponent } from "./components/private/private.component";
import { secureRouteGuard } from "./guards/secure-route.guard";
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { CustomPreloadService } from "./service/preload/custom-preload.service";
import { ObservableComponent } from "./components/observable/observable.component";
import { UsersComponent } from "./components/users/users.component";
import { userResolver } from "./resolver/user.resolver";
import { QuoteComponent } from "./components/quote/quote.component";
import { ProductComponent } from "./components/product/product.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "observable", component: ObservableComponent },
  { path: "private", component: PrivateComponent, canActivate: [() => true, secureRouteGuard] },
  { path: "login", component: AuthenticationComponent },
  { path: 'decorator', data: { 'preload': false }, loadChildren: () => import('./decorator/decorator.module').then(m => m.DecoratorModule) }, // lazy loading
  { path: "users", component: UsersComponent, resolve: { 'users': userResolver } },
  { path: "quotes", component: QuoteComponent, canActivate: [() => true, secureRouteGuard] },
  { path: "products", component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: CustomPreloadService // PreloadAllModules // NoPreloading
    ,
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
