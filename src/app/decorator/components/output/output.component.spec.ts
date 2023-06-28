import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComponent } from './output.component';
import { OutputChildComponent } from "../output-child/output-child.component";
import { QuoteComponent } from "../quote/quote.component";

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputComponent, OutputChildComponent, QuoteComponent]
    });
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no quote', () => {
    const p = fixture.nativeElement.querySelector('p');
    expect(p.textContent).toEqual("Aucune citation");
  });

  it('quote should be changed', () => {
    component.quote = { quote: 'Hello World', author: 'Stéphane' };
    fixture.detectChanges();
    const p = fixture.nativeElement.querySelector('.blockquote > p');

    expect(p.textContent).toEqual("Hello World");
  });

  it('should have a quote', () => {
    const button = fixture.nativeElement.querySelector('.btn-outline-primary');
    button.click();
    fixture.detectChanges();
    const p = fixture.nativeElement.querySelector('.blockquote > p');

    expect(p).toBeDefined();
    expect(p).not.toBeNull();
  });

  it('quote should be reset', () => {
    component.quote = { quote: 'Hello World', author: 'Stéphane' };
    component.reset();

    expect(component.quote).toBeUndefined()
  });
});
