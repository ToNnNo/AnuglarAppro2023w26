import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticatorService } from "../../security/authenticator.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit, AfterViewInit {

  state: boolean = false

  // { static: false } -> les composants enfants ne sont pas accessibles dans le ngOnInit
  // { static: true } -> les composants enfants sont accessibles dans le ngOnInit
  @ViewChild('username', { static: false }) inputUsername!: ElementRef;

  // derrière une variable le ? signifie que la variable peut être undefined
  // derrière une variable le ! signifie que la variable doit être du type et non null

  constructor(private authenticator: AuthenticatorService) { }

  ngOnInit() {
    this.state = this.authenticator.isAuthenticate();
  }

  ngAfterViewInit() {
    this.inputUsername.nativeElement.focus();
  }

  public authenticate(): void {
    this.state = this.authenticator.login();
  }

  public logout(): void {
    this.state = this.authenticator.logout();
  }

}
