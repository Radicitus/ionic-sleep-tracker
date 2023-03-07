import { Component } from '@angular/core';
import { SleepService } from '../../services/sleep.service';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { ToastController } from '@ionic/angular';
import { interval } from 'rxjs';

@Component({
  selector: 'app-sleepiness',
  templateUrl: 'sleepiness.page.html',
  styleUrls: ['sleepiness.page.scss'],
})
export class SleepinessPage {
  date: Date;
  time: string = '';
  scaleValue: number = 1;
  notes: string = '';

  constructor(
    public sleepService: SleepService,
    private toastController: ToastController
  ) {
    this.date = new Date();

    this.updateTime();

    this.setAutoUpdateTime();
  }

  saveStanfordSleepData() {
    this.sleepService.logSleepinessData(
      new StanfordSleepinessData(this.scaleValue, this.notes)
    );

    this.presentToast();

    setTimeout(() => {
      this.scaleValue = 1;
      this.notes = '';
    }, 1800);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Saved!',
      duration: 1500,
      position: 'top',
      icon: 'checkmark-circle-outline',
    });

    await toast.present();
  }

  setAutoUpdateTime() {
    const minuteCounter = interval(10 * 1000);
    minuteCounter.subscribe(() => {
      // console.log('count');
      this.updateTime();
    });
  }

  updateTime() {
    this.date = new Date();
    this.time = this.date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
