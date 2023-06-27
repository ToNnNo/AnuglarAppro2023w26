import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";

@Component({
  selector: 'app-root', // => directive (ressemble à une balise html)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bnp';
  waiting = false;

  constructor(private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe( (event: Event) => {

      if( event instanceof NavigationStart ) {
        this.waiting = true;
      }

      if( event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError ) {
        this.waiting = false;
      }

    })

  }

}
