import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { AuthenticatorService } from "../security/authenticator.service";
import { Quote } from "../interface/quote.interface";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private httpClient: HttpClient, private authenticator: AuthenticatorService) { }

  public findAll(): Observable<Quote> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${this.authenticator.getToken()}`
      })
    };

    // es6 { variable } = { variableName: variableValue }
    return this.httpClient.get<any>(`${environment.staticUrlApi}/quote`, httpOptions).pipe(
      map( quote => {
        return { quote: quote.citation, author: quote.auteur }
      })
    );
  }
}
