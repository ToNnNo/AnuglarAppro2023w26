import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ReactiveFormsModule } from "@angular/forms";

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [AuthenticationComponent]
    });
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;

    spyOn(component, 'authenticate').and.callFake(() => {
      const { username, password } = component.form.getRawValue();
      if( username == "admin" && password == "admin" ) {
        component.state = true;
      }
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be not authenticated', () => {
    expect(component.state).toBeFalse();
  });

  it('should be sign out', () => {
    component.state = true;
    component.logout();

    expect(component.state).toBeFalse();
  });

  it('form should be invalid', () => {
    expect(component.form.invalid).toBeTrue();
  });

  it('form should be valid', () => {
    const form = component.form;

    form.setValue({ username: "admin", password: "admin" });

    expect(form.valid).toBeTrue();
  });

  it('should not be sign in', () => {
    const form = component.form;
    form.setValue({ username: "user", password: "user" });
    component.authenticate();

    expect(component.authenticate).toHaveBeenCalled();
    expect(component.state).toBeFalse();
  });

  it('should be sign in', () => {
    const form = component.form;
    form.setValue({ username: "admin", password: "admin" });
    component.authenticate();

    expect(component.state).toBeTrue();
  })
});
