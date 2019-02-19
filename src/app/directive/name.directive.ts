import { Directive } from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";
import {nameValidator} from "../../validator/name-validator";

@Directive({
  selector: '[appNameValidator]',
  providers: [{provider: NG_VALIDATORS, useValue: nameValidator(/[0-9]/g), multi: true}]
})
export class NameDirective {

  constructor() { }

}
