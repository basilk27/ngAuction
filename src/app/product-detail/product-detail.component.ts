import { Component, OnInit } from '@angular/core';
import { Product } from '../domain/product';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
//    const  prodId: number = parseInt(this.route..snapshot.params['producrId'], 10);
    const  prodId: number = parseInt(this.route.snapshot.params['productId'], 10);
    console.log('***BEfore BMK: ' + prodId);

    this.product = this.productService.getProductById(prodId);
    console.log('***BMK: ' + prodId);
    console.log('BMK2: ' + this.product);
  }

}
