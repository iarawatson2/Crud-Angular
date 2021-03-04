import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {
  
 product: Product= {
     name:'',
     price: 1
    
   }

  constructor(private productService:ProductService,
    private router:Router ) { }

  ngOnInit(): void {


  }
  creatProduct(){
    this.productService.creat(this.product).subscribe(()=>{
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])

    })
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }
}
