import {Component} from '@angular/core';
import {SleepService} from "./services/sleep.service";
import {OvernightSleepData} from "./data/overnight-sleep-data";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public sleepService: SleepService) {
  }

  ngOnInit() {
    console.log("APP: ", this.allSleepData);
    this.sleepService.logOvernightData(
      new OvernightSleepData(
        new Date('February 20, 2021 23:11:00'), new Date('February 20, 2021 23:12:00')
      ));
  }

  /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
  get allSleepData() {
    return SleepService.AllSleepData;
  }
}
