import { Component, OnInit } from "@angular/core";
import {ProductService, Product} from "../share/product-service.service";

@Component({
  selector: "app-product1",
  templateUrl: "./product1.component.html",
  styleUrls: ["./product1.component.css"]
})
export class Product1Component implements OnInit {
  product: Product
  constructor( private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
