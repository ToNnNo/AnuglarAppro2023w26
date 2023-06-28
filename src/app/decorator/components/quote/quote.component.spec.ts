import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteComponent]
    });
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    component.quote = { quote: 'test', author: 'test', source: 'test' }

    fixture.detectChanges(); // permet de mettre la vue pour les tests
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
