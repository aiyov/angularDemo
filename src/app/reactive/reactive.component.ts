import { Component, OnInit } from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {nameValidator, pwdValidator} from "../../validator/name-validator";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.css"]
})
export class ReactiveComponent implements OnInit {
  myForm: FormGroup
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      name: new FormControl("aiyov", [nameValidator(/[0-9]/g)]),
      password : fb.group({
        pwd: new FormControl("123456", Validators.minLength(3)),
        cpwd: new FormControl("12345")
      }, {
        validator: pwdValidator
      }),
      emaillists: new FormArray([
        new FormControl("a@a.com")
      ])
    });
  }

  /*myForm: FormGroup = new FormGroup({
    name: new FormControl("aiyov", [nameValidator(/[0-9]/g)]),
    password : new FormGroup({
      pwd: new FormControl("123456"),
      cpwd: new FormControl("12345")
    }, {
      validator: pwdValidator
    }),
    emaillists: new FormArray([
      new FormControl("a@a.com")
    ])
  })*/
  ngOnInit() {
  }
  addEmail() {
    const emailsList = this.myForm.get("emaillists") as FormArray;
    emailsList.push(new FormControl("b@b.com"));
  }
  onSubmit() {
    console.log(this.myForm.value);
    console.log(this.myForm.get("password").get('pwd').errors);
  }
}
