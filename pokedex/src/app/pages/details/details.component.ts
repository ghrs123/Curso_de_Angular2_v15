import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species'

  public pokemon: any;

  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor (
    private activatedRouter: ActivatedRoute,
    private pokeApiService: PokeApiService
    ) { }

  ngOnInit(): void {
   this.getPokemon;
   console.log(this.getPokemon)
  }

  get getPokemon() {
    const id = this.activatedRouter.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemon(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemon(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe({
      next: result => {
        this.pokemon = result;
        this.isLoading = true;
      },
      error: (err:Error) => {

        console.log(err);
        this.apiError = true;
      }
    });
  }

}
