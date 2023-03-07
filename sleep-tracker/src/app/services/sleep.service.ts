import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Injectable({
  providedIn: 'root',
})
export class SleepService {
  private static LoadDefaultData: boolean = true;
  public static AllSleepData: SleepData[] = [];
  public static AllOvernightData: OvernightSleepData[] = [];
  public static AllSleepinessData: StanfordSleepinessData[] = [];

  constructor() {
    if (SleepService.LoadDefaultData) {
      this.addDefaultData();
      SleepService.LoadDefaultData = false;
    }
  }

  private addDefaultData() {
    this.logOvernightData(
      new OvernightSleepData(
        new Date('February 18, 2021 01:03:00'),
        new Date('February 18, 2021 09:25:00')
      )
    );

    this.logSleepinessData(
      new StanfordSleepinessData(
        3,
        'I felt pretty good after that coffee!',
        new Date('February 19, 2021 14:38:00')
      )
    );

    this.logSleepinessData(
      new StanfordSleepinessData(
        3,
        "Nevermind, I'm feeling the crash now...",
        new Date('February 19, 2021 16:38:00')
      )
    );

    this.logSleepinessData(
      new StanfordSleepinessData(
        3,
        'Raffi annoyed me.',
        new Date('February 19, 2021 18:36:00')
      )
    );

    this.logOvernightData(
      new OvernightSleepData(
        new Date('February 20, 2021 23:11:00'),
        new Date('February 21, 2021 08:03:00')
      )
    );

    this.logOvernightData(
      new OvernightSleepData(
        new Date('February 22, 2021 22:11:00'),
        new Date('February 23, 2021 07:03:00')
      )
    );

    this.logOvernightData(
      new OvernightSleepData(
        new Date('February 24, 2021 23:59:00'),
        new Date('February 25, 2021 10:03:00')
      )
    );
  }

  public logOvernightData(sleepData: OvernightSleepData) {
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllOvernightData.push(sleepData);
  }

  public logSleepinessData(sleepData: StanfordSleepinessData) {
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllSleepinessData.push(sleepData);
  }
}
