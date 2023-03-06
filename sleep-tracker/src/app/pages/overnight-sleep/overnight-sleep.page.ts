import { Component } from '@angular/core';
import {SleepService} from "../../services/sleep.service";

@Component({
  selector: 'app-overnight-sleep',
  templateUrl: 'overnight-sleep.page.html',
  styleUrls: ['overnight-sleep.page.scss']
})
export class OvernightSleepPage {

  date:Date;
  constructor(public sleepService: SleepService) {
    this.date = new Date();
  }

  ngOnInit() {
    console.log("OVERNIGHT: ", SleepService.AllSleepData);
  }

  getCurrentDate() {

  }

}
