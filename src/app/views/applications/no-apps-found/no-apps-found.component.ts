import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-apps-found',
  templateUrl: './no-apps-found.component.html',
  styleUrls: ['./no-apps-found.component.scss']
})
export class NoAppsFoundComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  gotoNewApp() {
    this.router.navigate(['applications/new']);
  }
}
