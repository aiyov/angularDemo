import { Injectable } from "@angular/core";
import {ProductService, Product} from "./product-service.service";
import {LoggerService} from "./logger.service";

@Injectable()
export class AnotherProductService implements ProductService {

  constructor(public logger: LoggerService) { }
  getProduct() {
    this.logger.log("这个是三星手机");
    return new Product(1, "sumsung7", 5399, "这个是三星最新款手机");
  }
}
