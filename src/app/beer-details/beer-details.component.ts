import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../beer-service.service';
import { BeerModel } from '../beer-model';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  id: string | null = null;
  beer: BeerModel | null = null;

  constructor(private route: ActivatedRoute, private beerService: BeerService) {}

  ngOnInit(): void {
        /**
    * J'utilise le his.route.snapshot.paramMap.get('id'); quand je veux changer les données et que je change de composant
    * Comme quand je passe de la liste aux détails et inversement
    */
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('this.id:', this.id);
    this.getSingleBeerIncomponent();
    // this.route.paramMap.subscribe(params => { // Carl va faire des recherches et nous expliquer ça
    //   console.log('params.get', params.get('id'))
    //   this.id = params.get('id');
    // });
  }


  async getSingleBeerIncomponent() {
    const singleBeerInComponent = await this.beerService.getSingleBeerInService(Number(this.id));
    console.log('singleBeerInComponent:', singleBeerInComponent)
    this.beer = singleBeerInComponent;;
  }

}
