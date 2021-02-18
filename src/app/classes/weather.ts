import { stringify } from '@angular/compiler/src/util';

export class Weather {
  constructor(public location: string, temperature: string, icon: string) {}
}
