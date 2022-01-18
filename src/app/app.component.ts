import { Component } from '@angular/core';
import { CAROUSEL_ITEMS } from './consts/carousel.const';
import { ICarousel } from './models/ICarousel.metadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public carouselData: ICarousel[] = CAROUSEL_ITEMS; // Declaration of the items to show in the carousel
  title = 'carousel';
}
