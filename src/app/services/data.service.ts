import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _age: number = 40

  get age(): number {
    return this._age
  }

  set age(value: number) {
    this._age = value
  }

}
