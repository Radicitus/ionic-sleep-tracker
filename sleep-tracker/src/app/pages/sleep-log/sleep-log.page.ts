import {Component, Input, OnInit} from '@angular/core';
import {SleepService} from "../../services/sleep.service";
import {SleepData} from "../../data/sleep-data";

@Component({
  selector: 'app-sleep-log',
  templateUrl: 'sleep-log.page.html',
  styleUrls: ['sleep-log.page.scss']
})
export class SleepLogPage {

  constructor(public sleepService: SleepService) {}

  get allSleepinessData() {
    return SleepService.AllSleepinessData;
  }

  get allOvernightData() {
    return SleepService.AllOvernightData;
  }

  get allSleepData() {
    return SleepService.AllSleepData;
  }
}
