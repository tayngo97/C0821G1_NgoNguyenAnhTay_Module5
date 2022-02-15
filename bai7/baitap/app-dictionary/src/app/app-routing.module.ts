import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailWordComponent } from './detail-word/detail-word.component';
import { ListWordComponent } from './list-word/list-word.component';


const routes: Routes = [
  {
    path: '', component:ListWordComponent
  },
  {
    path: 'list/detail/:id', component:DetailWordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
