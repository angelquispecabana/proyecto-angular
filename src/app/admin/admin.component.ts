import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class AdminComponent {}
