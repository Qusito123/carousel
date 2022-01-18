import { Component, Input, OnInit } from '@angular/core';
import { ICarousel } from 'src/app/models/ICarousel.metadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  // Input Properties
  @Input() height = 500; // Initialize the height of component
  @Input() isFullScreen = false; // Initialize if component is fullscreen
  @Input() items: ICarousel[] = []; // Initialize the items as empty
  @Input() autoScroll = true; // Initialize autoScroll in false
  @Input() time = 2000; // Initialize time in 2s

  // Final properties
  public finalHeight: string | number = 0; // Handles final height of the component
  public currentPosition = 0; // Handles what item is currently visible 

  constructor() { 
    this.finalHeight = `${this.height}px`; // Gives the height of the component
  }

  ngOnInit(): void {
    // Give an id to the items in carousel
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    });

    // Checks if component is full page size or gives the value of the height
    this.isFullScreen ? this.finalHeight = '100vh' : `${this.height}px`;

    // Checks if component has auto scroll
    if(this.autoScroll) this.Repeat();
  }

  setCurrentPosition(position: number){
    // Handles the current slide visible
    this.currentPosition = position;
    this.items.find(i => i.id === 0).marginLeft = -100 * position;
  }

  setNextPosition() {
    // Handles the next slide tho show
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if(nextPosition <= this.items.length - 1){
      finalPercentage = -100 * nextPosition;
    }else{
      nextPosition = 0;
    }

    this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setPreviousPosition(){
    // Handles the previous slide to show
    let finalPercentage = 0;
    let previousPosition = this.currentPosition - 1;
    if(previousPosition >= 0){
      finalPercentage = -100 * previousPosition;
    }else{
      previousPosition = this.items.length - 1;
      finalPercentage = -100 * previousPosition;
    }

    this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = previousPosition;
  }

  Repeat() {
    // Makes the auto scroll
    setTimeout(() => {
      this.setNextPosition();
      this.Repeat();
    }, this.time);
  }

}
