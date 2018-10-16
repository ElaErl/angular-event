// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service'

@Component({
    selector: 'pm-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
 
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
       
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
       
    }
    filteredProducts: any[];

   products:any[] = [];
   public showDetail(detail): void {
       console.log(detail);
       this.myProductService.emmitProductDetailClickEvent(detail);
 
   }

    constructor(private myProductService:ProductsService) {
        this.filteredProducts = this.products;
       
    }

     ngOnInit(): void {
        this.myProductService.getMyProductData().subscribe(d=>{this.products = d; this.products[0].spela="punca"; this.listFilter = ''});
  }

    performFilter(filterBy: string): any[] {
       
        if (filterBy.trim().length == 0)
            return this.products;
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    };

}
