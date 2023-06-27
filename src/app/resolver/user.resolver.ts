import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { UserService } from "../service/user.service";
import { User } from "../interface/user.interface";

export const userResolver: ResolveFn<User[]> = (route, state) => {
  const userService = inject(UserService);

  return userService.findAll();
};
