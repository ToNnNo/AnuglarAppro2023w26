import { Component, OnInit } from '@angular/core';
import { User } from "../../interface/user.interface";
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findAll().subscribe((users) => {
      this.users = users;
    })
  }
}
