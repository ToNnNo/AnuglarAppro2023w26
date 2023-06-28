import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { userResolver } from './user.resolver';
import { User } from "../interface/user.interface";
import { UserService } from "../service/user.service";
import { UserMockService } from "../mock/service/UserMockService";

describe('userResolver', () => {
  const executeResolver: ResolveFn<User[]> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => userResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useClass: UserMockService }
      ]
    });
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });

  it('findAll should have 1 result', (done) => {
    const userService = TestBed.inject(UserService);

    userService.findAll().subscribe((users: User[]) => {
      expect(users.length).toEqual(1);
      expect(users[0].username).toEqual('Anonymous');
      done(); // async est terminé, revient au thread principale
    })
  })
});
