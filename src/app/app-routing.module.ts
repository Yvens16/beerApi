import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';

const routes: Routes = [
  {path:"", redirectTo: "beers/1", pathMatch: "full"},
  {path: "beers/:pageId", component: BeerListComponent},
  {path: "beer/:id", component: BeerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
