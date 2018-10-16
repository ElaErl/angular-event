import { Component, OnInit } from '@angular/core';
import {ProductDetailService} from './product-detail.service';
import {ProductsService} from '../products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  showDetails: boolean = false;
  product: any;
  productkeys:[];

  constructor(private myProductDetailService:ProductDetailService , private productsService:ProductsService) {
    
   }

     ngOnInit(): void {
         this.productsService.getProductDetailEventEmmiter().subscribe(detail=>{
            this.productkeys = Object.keys(detail);
            this.product = detail;
            console.log("from detail:");
            console.log(detail);
             console.log( this.productkeys);
         })
  }

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    };

  }
