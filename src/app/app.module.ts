import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Product1Component } from "./product1/product1.component";
import {ProductService} from "./share/product-service.service";
import { Product2Component } from "./product2/product2.component";
import {LoggerService} from "./share/logger.service";
import {AnotherProductService} from "./share/another-product-service.service";
import { TemplateComponent } from "./template/template.component";
import { ReactiveComponent } from "./reactive/reactive.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DemoComponent } from "./demo/demo.component";
import {DemoDirective, UnlessDirective} from "./directive/demo.directive";
import { NameDirective } from './directive/name.directive';

@NgModule({
  declarations: [ /*//申明*/
    AppComponent,
    Product1Component,
    Product2Component,
    TemplateComponent,
    ReactiveComponent,
    DemoComponent,
    DemoDirective,
    UnlessDirective,
    NameDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
export class AppModule {
}
