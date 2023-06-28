import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../interface/product.interface";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.staticUrlApi}/product`);
  }
}
