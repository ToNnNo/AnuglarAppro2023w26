import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticatorService } from "../../security/authenticator.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

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

  form = new FormGroup({
    username: new FormControl('admin', [Validators.required]),
    password: new FormControl('admin', [Validators.required])
  });

  constructor(private authenticator: AuthenticatorService) { }

  ngOnInit() {
    this.authenticator.state.subscribe( state => {
      this.state = state;
    });

    this.state = this.authenticator.isAuthenticate();
  }

  ngAfterViewInit() {
    this.inputUsername.nativeElement.focus();
  }

  public authenticate(): void {
    if( this.form.valid ) {
      const { username, password } = this.form.getRawValue();
      this.authenticator.login(username!, password!);
    }
  }

  public logout(): void {
    this.authenticator.logout();
  }

}
