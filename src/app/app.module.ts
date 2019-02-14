import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Product1Component } from "./product1/product1.component";
import {ProductService} from "./share/product-service.service";
import { Product2Component } from "./product2/product2.component";
import {LoggerService} from "./share/logger.service";
import {AnotherProductService} from "./share/another-product-service.service";

@NgModule({
  declarations: [ /*//申明*/
    AppComponent,
    Product1Component,
    Product2Component,
  ],
  imports: [
    BrowserModule
  ],
  /*providers: [{provide: ProductService, useFactory: (log: LoggerService, is_DEV) => {
    if (is_DEV) {
      return new ProductService(log);
    } else {
      return new AnotherProductService(log);
    }
  }, deps: [LoggerService, "is_DEV"]}, LoggerService, AnotherProductService, {provide: "is_DEV", useValue: true}],*/
  providers: [ProductService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
