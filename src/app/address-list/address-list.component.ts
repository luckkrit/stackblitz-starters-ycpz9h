import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../address';
import { TestService } from '../test.service';
import { CommonModule } from '@angular/common';
import { AddressFormComponent } from '../address-form/address-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-list',
  standalone: true,
  imports: [CommonModule, AddressFormComponent, FormsModule],
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css',
})
export class AddressListComponent implements OnInit {
  addressObservable!: Observable<Address[]>;
  editAddress = false;
  copyAddress = false;
  constructor(private testService: TestService) {}
  ngOnInit(): void {
    this.addressObservable = this.testService.addressObservable;
    this.testService.getAddress();
  }
  editChange(): void {
    console.log(this.editAddress);
  }
}
