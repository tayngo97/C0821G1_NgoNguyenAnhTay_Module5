import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  submit() {
    const category = this.categoryForm.value;
    category.id = parseInt(category.id);

    this.categoryService.saveCategory(category).subscribe(()=>{
      this.categoryForm.reset();
      alert('Category saved !');
    }, err => {
      console.log(err);
    });
  }

  
}
