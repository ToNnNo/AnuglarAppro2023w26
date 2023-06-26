import { Component } from '@angular/core';
import { Quote } from "../../../interface/quote.interface";
import { quotes } from "../../../mock/quote.mock";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  quotes: Quote[] = quotes;

}
