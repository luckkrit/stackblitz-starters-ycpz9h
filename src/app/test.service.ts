import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from './address';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private store: BehaviorSubject<Address[]> = new BehaviorSubject<Address[]>(
    []
  );
  addressObservable: Observable<Address[]> = this.store.asObservable();
  constructor() {}
  getAddress() {
    this.store.next([
      {
        newAddress: {
          mobilePhone: '0952289665',
        },
        oldAddress: {
          mobilePhone: '0891671761',
        },
      },
    ]);
  }
}
