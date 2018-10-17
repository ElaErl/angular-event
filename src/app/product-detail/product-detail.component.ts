import { Component, OnInit } from '@angular/core';
import {ProductDetailService} from './product-detail.service';
import {ProductsService} from '../products/products.service';
//import { $ } from 'jquery';
import { DropEvent } from 'angular-draggable-droppable';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  showDetails: boolean = false;
  product: any;
  productkeys: [];
  
  
   splitKey(key) {
     return key.split(/(.*[a-z])(?=[A-Z])/).join(' ');
   };


  constructor(private myProductDetailService:ProductDetailService , private productsService:ProductsService) {
   }
  // droppedData: string = '';

  // onDrop({ dropData }: DropEvent<string>): void {
  //   this.droppedData = dropData;
  // //  setTimeout(() => {
  // //     this.droppedData = '';
  // //   }, 2000);
  // }

     ngOnInit(): void {
          this.productsService.getProductDetailEventEmmiter().subscribe(detail=>{
           this.productkeys = Object.keys(detail);
           this.product = detail;
          //  console.log("from detail:");
          //  console.log(detail);
          //  console.log(this.productkeys);
         });

         $( function() {
          $( "#speladragdrop" ).draggable();
        } );
  }

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    };

  }
