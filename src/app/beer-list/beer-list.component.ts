import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer-service.service';
import { BeerModel } from '../beer-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  constructor(private beerService: BeerService, private router: ActivatedRoute) { }
  beersListInComponent: BeerModel[] = [];

  ngOnInit() {

    this.router.paramMap.subscribe(params => {
    /**
    * J'utilise le router.paramMap.subscribe quand je veux changer les données sans changer le composant
    */
      this.getBeersInComponentByPageId(params.get('pageId') as string)
    });
  }

  async getBeersInComponent() {
    const beers = await this.beerService.getBeers();
    console.log('beers:', beers)
    this.beersListInComponent = beers;
  }

  async getBeersInComponentByPageId(pageId: string) {
    const pageIdNumber = Number(pageId);
    const beers = await this.beerService.getBeersByPageId(pageIdNumber);
    this.beersListInComponent = beers;
  }

  // getBeersInComponent2() {
  //   this.beerService.getBeers()
  //   .then(beers => {
  //     this.secondAppeAPi()
  //     .then(() => {
  //       this.ThirdApellApi()
  //       .then(() => {

  //       })
  //     })
  //   })
  // }
}
