import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { Auth } from './users';
import { HomeComponent } from "./home";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home'} },
  { path: 'user', loadChildren:'app/users/users.module#UsersModule' },
  { path: 'articles', loadChildren:'app/articles/articles.module#ArticlesModule' },
  { path: 'charts', loadChildren:'app/charts/charts.module#ChartsModule' },

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  providers: [
    Auth
  ]
})
export class AppRoutingModule { }
