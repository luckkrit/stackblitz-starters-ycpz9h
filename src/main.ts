import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AddressListComponent } from './app/address-list/address-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-address-list></app-address-list>
  `,
  imports: [CommonModule, AddressListComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
