import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  currentYear;

  constructor() { }

  ngOnInit() {

    this.currentYear = new Date().getFullYear();
  }

}
