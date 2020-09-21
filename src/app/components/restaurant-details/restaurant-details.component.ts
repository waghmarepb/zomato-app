/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})

export class RestaurantDetailsComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  private restaurantId: string;
  public resDetails: any;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantsService,
  ) { }

  public ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.restaurantId = params.id;
      console.log('this.restaurantId', this.restaurantId);
    });

    this.restaurantService.getRestaurant(this.restaurantId).subscribe((restaurantDetail) => {
      this.resDetails = restaurantDetail;
      console.log('restaurantDetail', this.resDetails);
    });

  }

  // unsubscribing router subscription
  public ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
