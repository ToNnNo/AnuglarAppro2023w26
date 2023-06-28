import { Observable, of } from "rxjs";
import { User } from "../../interface/user.interface";

export class UserMockService {

  public findAll(): Observable<User[]> {
    return of([
      { id: 1, name: "John Doe", username: "Anonymous", email: "john.doe@gmail.com", phone: "06 118 218" }
    ])
  }
}
