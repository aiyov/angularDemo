import {AbstractControl, FormControl, FormGroup, ValidatorFn} from "@angular/forms";

export function nameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {"forbiddenName": {value: control.value}} : null;
  };
}

export function pwdValidator(group: FormGroup): {[key: string]: any} | null {
    const password: FormControl = group.get("pwd") as FormControl;
    const cpassword: FormControl = group.get("cpwd") as FormControl;
    const valid: boolean = (password.value === cpassword.value);
    return valid ? {equal: true} : null;
}
