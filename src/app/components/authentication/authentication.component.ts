import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from "../../security/authenticator.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  state: boolean = false

  constructor(private authenticator: AuthenticatorService) { }

  ngOnInit() {
    this.state = this.authenticator.isAuthenticate();
  }

  public authenticate(): void {
    this.state = this.authenticator.login();
  }

  public logout(): void {
    this.state = this.authenticator.logout();
  }

}
