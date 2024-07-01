import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NewAddress } from '../new-address';
import { OldAddress } from '../old-address';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css',
})
export class AddressFormComponent implements OnInit, OnChanges {
  ngOnInit(): void {
    this.nAddress = { ...this.newAddress };
    this.oAddress = { ...this.oldAddress };
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['editAddress'] !== undefined) {
      if (changes['editAddress'].currentValue === true) {
        this.nAddress.mobilePhone = '';
      } else {
        if (this.nAddress !== undefined) {
          this.nAddress = { ...this.newAddress };
        }
      }
    }
    if (changes['copyAddress'] !== undefined) {
      if (changes['copyAddress'].currentValue === true) {
        this.nAddress = { ...this.oldAddress };
      } else {
        this.nAddress = { ...this.newAddress };
        this.nAddress.mobilePhone = '';
      }
    }
  }
  @Input() newAddress!: NewAddress;
  @Input() oldAddress!: OldAddress;
  @Input() editAddress!: boolean;
  @Input() copyAddress!: boolean;
  nAddress!: NewAddress;
  oAddress!: OldAddress;
}
