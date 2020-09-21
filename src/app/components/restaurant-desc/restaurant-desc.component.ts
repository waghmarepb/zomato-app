/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-desc',
  templateUrl: './restaurant-desc.component.html',
  styleUrls: ['./restaurant-desc.component.scss']
})
export class RestaurantDescComponent implements OnInit {

  @Input() description: any;

  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {
    console.log(this.description);
  }

  // navigating to full detail page for specific restaurants
  public showMoreDetails(id: string): void {
    this.router.navigate([`restaurant/${id}`]);
  }

}
