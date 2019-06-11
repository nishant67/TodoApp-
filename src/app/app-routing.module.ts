import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewHeroComponent } from './view-hero/view-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'dashboard' , component : DashboardComponent,pathMatch:'full'},
      { path: 'viewHero', component: ViewHeroComponent},
      { path: 'addHero', component: EditHeroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
