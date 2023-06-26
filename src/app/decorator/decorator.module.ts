import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorRoutingModule } from './decorator-routing.module';
import { DecoratorComponent } from './decorator.component';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    DecoratorComponent,
    ContentChildComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    DecoratorRoutingModule
  ]
})
export class DecoratorModule { }
