import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() {}

  deepCopy(obj): any {
    return JSON.parse(JSON.stringify(obj));
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}