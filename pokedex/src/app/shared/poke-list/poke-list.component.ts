import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemon: any;

  public apiError: boolean = false;

  constructor (private pokemonApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokemonApiService.apiListAllPokemons.subscribe({
        next: ( value => {
                this.setAllPokemon = value.results;
                this.getAllPokemons = this.setAllPokemon;
        }),
        error: ((error: Error) => {
          console.log(error);
          this.apiError = true;
        })
    });
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemon.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }

}
