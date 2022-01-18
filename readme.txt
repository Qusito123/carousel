This project was realized with Angular 11.


First, I created an interface called ICarousel, this interface handles the properties of an Item that will be displayed in the carousel.

Then, I created a component called carousel, this component has the next 5 input properties:

- height: Initialized with 500px, it handles the height of the component.
- isFullScreen: Boolean propertie to handle if the component will be fullscreen, Initialized as false.
- items: Handles an array of ICarousel which has the items that will be displayed, Initialized as empty.
- autoScroll: Boolean propertie to hanlde if the component will have auto scroll, Initialized as true.
- time: It handles the time in ms of the auto scroll event.

This component has 2 public variables:
- finalHeight: Handles wich will be the final height of the component.
- currentPosition: Handles wich item is currently visible.

In the ngOnInit function first I mapped the items array to set the id and the marginLeft of every item.
Then, it checks if the isFullScreen option is true, if so, it gives 100vh to the component, if not, it sets the height of 500px or the indicated.
And finally it checks if the autoScroll option is active, if so, it calls a function named Repeat.

This component has 4 functions:
- setCurrentPosition: It takes care of swicthing the item that the user wants to see, this function is called in the html on the dot controll.
- setNextPosition: It takes care of sliding to the next item that the user wants to see, this function is called in the html on the right chevron button and in the Repeat function.
- setPreviousPosition: It takes care of sliding to the previous item that the user wants to see, this function is called in the html on the left chevron button.
- Repeat: It takes care of the auto scroll event.

setCurrentPosition

This function is easy, it receives the id of the position that the user wants to display, then it sets the value to the variable currentPosition,
and finally it searches for the first element and multiplies by -100 the position wanted.

setNextPosition

This function has 2 variables, finalPercentage that handles which will be the percentage of movement to display the next item,
and the nextPosition, that takes the currentPosition and adds 1 to get the next position.
Then, it checks if the nextPosition is lower or equal than the final position, if so, the finalPercentage is set to the nextPosition multiplied by - 100,
if not, the nextPosition is set to 0, meaning that we reached to the final item and we want to restart the cycle.
Finally, we do the same as the setCurrentPosition function, searching for the first element to set the marginLeft with the final finalPercentage value, and the currentPosition is set to the final nextPosition value.

setPreviousPosition

This function is similar to the setNextPosition function, with the difference that it searches for a previous position.
It checks if the previousPosition is higher or equal to 0, if so, the finalPercentage will be set to the previousPosition multiplied to - 100,
if not, the previousPosition will be set to the final item, and the finalPercentage will be set to the previousPosition multiplied by - 100.

Repeat

This function consists in a timeout called every 2s or the indicated by the user, and calls the setNextPosition function and the Repeat function.

Finally, I created a const folder with a file called carousel.const.ts, in this file I declared all the items that will be in the carousel. You can feel free to add more items to the carousel within this file.

To display the component I used the app-component created by default with Angular.

Please, let me know if you have doubts or comments.