import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  }, 
  {
    path: 'about', component: AboutComponent
  },
  {
    path:'',
    redirectTo:'home', 
    pathMatch:'full'
  },
  {
    path:'**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
