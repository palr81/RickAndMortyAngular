import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  {path: "episodes", component:EpisodesComponent},
  {path: "locations", component:LocationsComponent},
  {path: "characters", component:CharactersComponent},
  {path:"", redirectTo: "/characters", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
