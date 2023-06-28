import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { QuoteService } from "../../service/quote.service";
import { QuoteMockService } from "../../mock/service/QuoteMockService";

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [QuoteComponent],
      providers: [
        { provide: QuoteService, useClass: QuoteMockService }
      ]
    });
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
