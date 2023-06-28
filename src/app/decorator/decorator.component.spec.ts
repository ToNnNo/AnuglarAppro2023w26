import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorComponent } from './decorator.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('DecoratorComponent', () => {
  let component: DecoratorComponent;
  let fixture: ComponentFixture<DecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DecoratorComponent]
    });
    fixture = TestBed.createComponent(DecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
