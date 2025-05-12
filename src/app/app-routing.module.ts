import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListasComponent } from './components/listas/listas.component';
import { CardsComponent } from './components/cards/cards.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  { path: '', component: ListasComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'listas', component: ListasComponent },
  { path: 'pokemon/:id', component: PokemonComponent},
  { path: '**', component: ListasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
