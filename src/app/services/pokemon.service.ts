import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private images: any;  
  private url = 'https://pokeapi.co/api/v2/pokemon'; 

  constructor(private http: HttpClient) { }

  getAllImages():Observable<any> {    
    return this.http.get<any>(this.url + '?limit=10');                        
  }
  
  getIdImage(id:string): Observable<any> {        
    return this.http.get<any>(this.url+'/'+id);
  }

}
