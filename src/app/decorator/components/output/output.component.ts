import { Component } from '@angular/core';
import { Quote } from "../../../interface/quote.interface";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  quote?: Quote;

  public reset(): void {
    this.quote = undefined;
  }

}
