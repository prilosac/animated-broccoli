import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RandomForestComponent } from './random-forest/random-forest.component';
import { SVMComponent } from './svm/svm.component';
import { BaggingComponent } from './bagging/bagging.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'random-forest', component: RandomForestComponent },
	{ path: 'svm', component: SVMComponent },
	{ path: 'bagging', component: BaggingComponent },
	{ path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
