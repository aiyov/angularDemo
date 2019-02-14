import { Component, OnInit } from "@angular/core";
import {AnotherProductService} from "../share/another-product-service.service";
import {Product, ProductService} from "../share/product-service.service";

@Component({
  selector: "app-product2",
  templateUrl: "./product2.component.html",
  styleUrls: ["./product2.component.css"],
  providers: [{provide: ProductService, useClass: AnotherProductService}]
})
export class Product2Component implements OnInit {
  product: Product
  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
