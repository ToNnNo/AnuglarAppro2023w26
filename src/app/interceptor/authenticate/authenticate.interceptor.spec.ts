import { TestBed } from '@angular/core/testing';

import { AuthenticateInterceptor } from './authenticate.interceptor';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('AuthenticateInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      AuthenticateInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthenticateInterceptor = TestBed.inject(AuthenticateInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
