import { HoodiesComponent } from './pages/hoodies/hoodies.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sneakers", component: SneakersComponent},
  {path: "hoodies", component: HoodiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
