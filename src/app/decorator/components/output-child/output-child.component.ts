import { Component, EventEmitter, Output } from '@angular/core';
import { Quote } from "../../../interface/quote.interface";
import { quotes } from "../../../mock/quote.mock";

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent {

  private quotes: Quote[] = quotes;
  @Output() quoteEvent = new EventEmitter<Quote>();

  public randomQuote(): void {
    const key: number = Math.floor(Math.random() * this.quotes.length);

    this.quoteEvent.emit( this.quotes[key] );
  }

}
