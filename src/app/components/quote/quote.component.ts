import { Component, OnInit } from '@angular/core';
import { QuoteService } from "../../service/quote.service";
import { Observable } from "rxjs";
import { Quote } from "../../interface/quote.interface";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote?: Quote;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.findAll().subscribe( quote => {
      this.quote = quote;
    })
  }

}
