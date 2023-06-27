import { Injectable } from '@angular/core';
import { delay, map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../interface/user.interface";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.placeholderUrlApi}/users`).pipe( delay(2000) ); //.pipe(map( (users: User[]) => { return users }));
  }
}
