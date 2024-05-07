import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
      this.getProductList();
  }

  getProductList() {
    this.productService.getProducts().subscribe(
      response => {
        console.log(response)
      }
    )
  }
}
/*
17:39 https://www.youtube.com/watch?v=nxb27l6LBEU
*/
