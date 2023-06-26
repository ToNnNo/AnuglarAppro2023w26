import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoratorComponent } from './decorator.component';
import { ContentChildComponent } from "./components/content-child/content-child.component";

const routes: Routes = [
  // path: decorator
  { path: '', component: DecoratorComponent, children: [
      { path: 'content-child', component: ContentChildComponent },
      { path: '', redirectTo: '/decorator/content-child', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratorRoutingModule { }
