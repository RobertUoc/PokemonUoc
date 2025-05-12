import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.interface';

@Component({
  selector: 'app-listas',
  standalone: false,
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.css'
})
export class ListasComponent  implements OnInit {

  images: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAllImages().subscribe(data => {
      this.images = data.results;      
    });    
  }
}
