import { Injectable } from "@angular/core";
import {LoggerService} from "./logger.service";

@Injectable()
export class ProductService {

  constructor(public logger: LoggerService) { }
  getProduct(): Product {
    this.logger.log("调用了log服务");
    return new Product(0, "phone", 5799, "这个是最新款iphone");
  }
}

export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public desc: string
  ) {}
}
