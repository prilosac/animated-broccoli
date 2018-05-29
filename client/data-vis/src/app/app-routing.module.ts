import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RandomForestComponent } from './random-forest/random-forest.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'random-forest',
		component: RandomForestComponent
	}

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
