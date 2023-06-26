import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorRoutingModule } from './decorator-routing.module';
import { DecoratorComponent } from './decorator.component';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { AlertComponent } from './components/alert/alert.component';
import { InputComponent } from './components/input/input.component';
import { QuoteComponent } from './components/quote/quote.component';


@NgModule({
  declarations: [
    DecoratorComponent,
    ContentChildComponent,
    AlertComponent,
    InputComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    DecoratorRoutingModule
  ]
})
export class DecoratorModule { }
