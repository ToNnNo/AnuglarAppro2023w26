import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from "../../security/authenticator.service";
import { Router } from "@angular/router";
import { AuthenticateUser } from "../../interface/authenticate-user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user?: AuthenticateUser;

  constructor(private authenticator: AuthenticatorService, private router: Router) { }

  ngOnInit() {
    this.authenticator.state.subscribe( state => {
      this.user = this.authenticator.getUser();
    })
  }

  public logout(): void {
    this.authenticator.logout();
    this.router.navigateByUrl('/login'); // faire redirection
  }
}
