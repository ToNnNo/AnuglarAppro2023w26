import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PrivateComponent } from "./components/private/private.component";
import { secureRouteGuard } from "./guards/secure-route.guard";
import { AuthenticationComponent } from "./components/authentication/authentication.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "private", component: PrivateComponent, canActivate: [() => true, secureRouteGuard] },
  { path: "login", component: AuthenticationComponent },
  { path: 'decorator', loadChildren: () => import('./decorator/decorator.module').then(m => m.DecoratorModule) }, // lazy loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
