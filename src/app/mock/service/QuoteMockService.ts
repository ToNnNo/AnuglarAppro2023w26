import { Observable, of } from "rxjs";
import { Quote } from "../../interface/quote.interface";

export class QuoteMockService {

  public findAll(): Observable<Quote> {
    return of({ quote: "Test", author: "Test", source: "Test" });
  }

}
