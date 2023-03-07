import { Component } from '@angular/core';

@Component({
  selector: 'app-sleepiness',
  templateUrl: 'sleepiness.page.html',
  styleUrls: ['sleepiness.page.scss']
})
export class SleepinessPage {

  date:Date;
  scaleValue:number = 1;
  notes:string = "";

  constructor() {
    this.date = new Date();
  }

}
