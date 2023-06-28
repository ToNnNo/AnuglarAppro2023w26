import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildComponent } from './content-child.component';
import { AlertComponent } from "../alert/alert.component";

describe('ContentChildComponent', () => {
  let component: ContentChildComponent;
  let fixture: ComponentFixture<ContentChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentChildComponent, AlertComponent]
    });
    fixture = TestBed.createComponent(ContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
