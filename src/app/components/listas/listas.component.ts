import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-listas',
  standalone: false,
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.css',
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

export class ListasComponent  implements OnInit {
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
