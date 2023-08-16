import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _age: number = 40
  private _recovering: boolean = false;
  private _injured: boolean = false;
  private _training: boolean = false;
  private _improving: boolean = false;

  get age(): number {
    return this._age
  }

  set age(value: number) {
    this._age = value
  }

  get recovering(): boolean {
    return this._recovering
  }

  set recovering(value: boolean) {
    this._recovering = value
  }

  get injured(): boolean {
    return this._injured
  }

  set injured(value: boolean) {
    this._injured = value
  }

  get training(): boolean {
    return this._training
  }

  set training(value: boolean) {
    this._training = value
  }

  get improving(): boolean {
    return this._improving
  }

  set improving(value: boolean) {
    this._improving = value
  }

}
