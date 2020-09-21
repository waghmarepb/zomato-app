/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewChildren, QueryList, ComponentRef, ComponentFactory } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RestaurantsService } from '../../services/restaurants.service';
import { RestaurantDescComponent } from '../restaurant-desc/restaurant-desc.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('false', style({ height: '60px' })),
      state('true', style({ height: '426px' })),
      transition('true <=> false', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class DashboardComponent implements OnInit {

  public loading: boolean;
  previous: number;
  public restaurants: any[];
  public componentRef: ComponentRef<RestaurantDescComponent>;

  @ViewChild('resDescContainer', { read: ViewContainerRef }) entry: ViewContainerRef;

  @ViewChildren('resDescContainer', { read: ViewContainerRef }) container: QueryList<ViewContainerRef>;


  constructor(
    private authService: AuthService,
    private restaurantService: RestaurantsService,
    private resolver: ComponentFactoryResolver
  ) { }

  public ngOnInit(): void {
    this.loading = true;
    this.restaurantService.getRestaurants().subscribe((data) => {
      this.restaurants = data.restaurants;
      this.restaurants = this.restaurants.map((restaurant: any) => {
        restaurant.expand = false;
        restaurant.rows = 1;
        return restaurant
      });
      this.loading = false;
    });
  }

  // creating dynamic component
  // public createComponent(resDec): void {
  //   this.entry.clear();
  //   const factory = this.resolver.resolveComponentFactory(RestaurantDescComponent);
  //   this.componentRef = this.entry.createComponent(factory);
  //   this.componentRef.instance.description = resDec;
  // }



  // destroying the dynamically created
  public destroyComponent(): void {
    this.componentRef.destroy();
  }

  createComponent(restaurantDescription: any, index: number): void {
    if (this.previous === index) {
      this.toggleComponent(index);
      return;
    }
    if (this.previous >= 0) {
      this.removeComponent(this.previous);
    }
    this.previous = index;
    this.restaurants[index].expand = true;
    this.restaurants[index].rows += 6;

    // create component code
    const factory: ComponentFactory<RestaurantDescComponent> = this.resolver.resolveComponentFactory(RestaurantDescComponent);
    this.componentRef = this.container.toArray()[index].createComponent(factory);
    this.componentRef.instance.description = restaurantDescription;
    this.componentRef.changeDetectorRef.detectChanges();
  }

  removeComponent(index: number): void {
    this.restaurants[this.previous].expand = false;
    this.restaurants[this.previous].rows -= 6;
    this.container.toArray()[index].remove();
  }

  // method to logout from
  public logout(): void {
    this.authService.logout();
  }

  toggleComponent(index: number) {
    this.restaurants[index].expand = !this.restaurants[index].expand;
    if (this.restaurants[index].expand) {
      this.previous = -1;
      this.createComponent(this.restaurants[index].restaurant, index);
    } else {
      this.removeComponent(index);
    }
  }

}
