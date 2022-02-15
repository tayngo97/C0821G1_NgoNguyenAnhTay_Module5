import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category : new FormControl()
  });

  categories: Category[] = [];


  constructor(private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllCategory();
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.productForm.reset();
  }


  getAllCategory (){
      this.categoryService.getAll().subscribe(categoires =>{
        this.categories = categoires
      })
  }
}
