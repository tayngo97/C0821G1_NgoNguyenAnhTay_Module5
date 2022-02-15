import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }



  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/categories');
  }

  saveCategory(category): Observable<Category> {
      return this.http.post<Category> (API_URL+ '/categories' ,category)
 }

  findById(id: number): Observable<Category> {
    return this.http.get<Category> (`${API_URL}/categories/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${API_URL}/categories/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${API_URL}/categories/${id}`);
  }

  // updateCategory(id: number, category: Category) {
  //   for (let i = 0; i < this.categories.length; i++) {
  //     if (this.categories[i].id === id) {
  //       this.categories[i] = category;
  //     }
  //   }
  // }

  // deleteCategory(id: number) {
  //   this.categories = this.categories.filter(category => {
  //     return category.id !== id;
  //   });
  // }
}