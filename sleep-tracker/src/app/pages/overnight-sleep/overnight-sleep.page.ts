import { Component } from '@angular/core';
import { SleepService } from '../../services/sleep.service';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { interval } from 'rxjs';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-overnight-sleep',
  templateUrl: 'overnight-sleep.page.html',
  styleUrls: ['overnight-sleep.page.scss'],
})
export class OvernightSleepPage {
  date: Date;
  time: string = '';
  day: string = '';
  isSleeping: boolean = false;
  statusMessage: string = 'You are not currently logging your sleep';
  startTime: Date = new Date();
  endTime: Date = new Date();
  sessionStartDate: string = '';
  sessionStartTime: string = '';

  constructor(public sleepService: SleepService) {
    this.date = new Date();

    this.updateDay();

    this.updateTime();

    this.setAutoUpdateDateTime();
  }

  startOvernightSleep() {
    this.isSleeping = true;
    this.startTime = new Date();

    this.sessionStartDate = this.startTime.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

    this.sessionStartTime = this.startTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    this.statusMessage = 'Sleeping...';
  }

  endOvernightSleep() {
    this.isSleeping = false;
    this.endTime = new Date();

    this.sleepService.logOvernightData(
      new OvernightSleepData(this.startTime, this.endTime)
    );

    this.statusMessage = 'You are not currently logging your sleep';
  }

  setAutoUpdateDateTime() {
    const secondCounter = interval(1000);
    secondCounter.subscribe(() => {
      // console.log('count');
      this.updateDay();
      this.updateTime();
    });
  }

  updateDay() {
    this.date = new Date();
    this.day = this.date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  }

  updateTime() {
    this.date = new Date();
    this.time = this.date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  onTap() {
    const hapticsImpactMedium = async () => {
      await Haptics.impact({ style: ImpactStyle.Medium });
    };

    hapticsImpactMedium();
  }
}
