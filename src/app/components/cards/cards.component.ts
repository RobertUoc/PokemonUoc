import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cards',
  standalone: false,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
    )  ,
    transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])                
    ]),
  ]  
})
export class CardsComponent implements OnInit {
  isLoading = false;
  images: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.pokemonService.getAllImages().subscribe(data => {
      this.images = data.results;      
      this.isLoading = false;
    });
  }
  
}
