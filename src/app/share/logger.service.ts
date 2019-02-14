import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {

  constructor() { }
  log(log: string): void {
    console.log(log);
  }
}
