import { Component, Input } from '@angular/core';
import { Quote } from "../../../interface/quote.interface";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {

  @Input() quote!: Quote;

}
