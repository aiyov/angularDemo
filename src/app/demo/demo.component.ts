import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo",
  // templateUrl: "./demo.component.html",
  // styleUrls: ["./demo.component.css"],
  // inputs: ["bankName", "id: account-id"],
  template: `
    Bank Name: {{bankName}}
    Account Id: {{id}}`
})
export class DemoComponent implements OnInit {

  bankName: String = "abcd";
  id: String = "asd";
  constructor() { }

  ngOnInit() {
    console.log(this);
  }

}
