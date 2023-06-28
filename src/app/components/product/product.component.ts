import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../service/product.service";
import { Product } from "../../interface/product.interface";
import { Observable } from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products?: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.findAll();
  }
}
