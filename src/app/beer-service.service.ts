import { Injectable } from '@angular/core';
import { BeerModel } from './beer-model';
@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor() { }

  public async getBeers(): Promise<BeerModel[]> {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const beersFromAPI: Promise<BeerModel[]> = await response.json();
    return beersFromAPI;
  }


  async getSingleBeerInService(id: number): Promise<BeerModel> {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
    const singleBerFromAPI = await response.json();
    return singleBerFromAPI[0];
  }

  async getBeersByPageId(pageId: number): Promise<BeerModel[]> {
    const res = await fetch(`https://api.punkapi.com/v2/beers?page=${pageId}&per_page=25`)
    const beers: Promise<BeerModel[]> = await res.json();
    console.log('beers:', beers);
    return beers;
  }

}
