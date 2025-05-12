import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.interface';

@Component({
  selector: 'app-cards',
  standalone: false,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  images: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAllImages().subscribe(data => {
      this.images = data.results;      
    });
  }
  
}
