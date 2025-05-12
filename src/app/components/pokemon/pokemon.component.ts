import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: false,
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemon : any;
  identifier : any;

  constructor(private pokemonService: PokemonService, 
              private activateRoute: ActivatedRoute,
              private router: Router
  ) {}

  ngOnInit(): void {

    this.identifier = this.activateRoute.snapshot.paramMap.get('id');
       
      if (this.identifier)  {    
        this.pokemonService.getIdImage(this.identifier).subscribe((image) => {
        this.pokemon = image;               
      });
    } 
    
  }

}
