import { Component } from '@angular/core';
import { SleepService } from '../../services/sleep.service';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sleepiness',
  templateUrl: 'sleepiness.page.html',
  styleUrls: ['sleepiness.page.scss'],
})
export class SleepinessPage {
  date: Date;
  scaleValue: number = 1;
  notes: string = '';

  constructor(
    public sleepService: SleepService,
    private toastController: ToastController
  ) {
    this.date = new Date();
  }

  saveStanfordSleepData() {
    this.sleepService.logSleepinessData(
      new StanfordSleepinessData(this.scaleValue, this.notes)
    );

    this.presentToast();

    setTimeout(() => {
      this.scaleValue = 1;
      this.notes = "";
    }, 1800);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Saved!',
      duration: 1500,
      position: 'top',
      icon: 'checkmark-circle-outline'
    });

    await toast.present();
  }
}
