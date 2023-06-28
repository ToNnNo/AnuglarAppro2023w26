import { Component, OnInit } from '@angular/core';
import { QuoteService } from "../../service/quote.service";
import { Quote } from "../../interface/quote.interface";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  citation?: Quote;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.findAll().subscribe( (quote: Quote) => {
      this.citation = quote;
    })
  }

}
