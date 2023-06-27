import { Component, OnDestroy, OnInit } from '@angular/core';
import { NumberService } from "../../service/number.service";
import { BehaviorSubject, Observable, Subject, Subscription } from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  value?: number;
  disabled: boolean = false;
  subscription?: Subscription;

  valueSubject?: string;

  valueBehaviorSubject$?: Observable<string>; // $ à la fin d'une variable => valeur asynchrone

  constructor(private number: NumberService) { }

  ngOnInit() {
    this.subjectFn();
    this.behaviorSubjectFn();
  }

  displayNumbers(): void {
    this.value = undefined;
    this.disabled = true;

    this.subscription = this.number.getNumbers().subscribe({
      next: (n: number) => {
        this.value = n;
      },
      error: (err: Error) => {},
      complete: () => {
        this.disabled = false;
      }
    })

  }

  subjectFn(): void {
    const subject = new Subject<string>();
    subject.next("Value 1");
    subject.next("Value 2");

    subject.subscribe( (value) => {
      console.log(value);
      this.valueSubject = value;
    });

    subject.next("Value 3");
    subject.complete();
    subject.unsubscribe();
  }

  behaviorSubjectFn(): void {
    const behaviorSubject = new BehaviorSubject<string>("Valeur Initial");
    // behaviorSubject.next('Value 0');
    this.valueBehaviorSubject$ = behaviorSubject.asObservable();

    // behaviorSubject.next("Value 1");
  }

  ngOnDestroy() {
    this.number.clear();
    this.subscription?.unsubscribe();
  }
}
