import { Component } from '@angular/core';
import { SleepService } from '../../services/sleep.service';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { ToastController } from '@ionic/angular';
import { interval } from 'rxjs';
import {Haptics, ImpactStyle} from "@capacitor/haptics";

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

    const hapticsImpactMedium = async () => {
      await Haptics.impact({ style: ImpactStyle.Medium });
    };

    hapticsImpactMedium();
    this.presentToast();

    this.scaleValue = 1;
    this.notes = '';
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
    const secondCounter = interval(1000);
    secondCounter.subscribe(() => {
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

  onSelectionChange() {
    const hapticsImpactLight = async () => {
      await Haptics.impact({ style: ImpactStyle.Light });
    };

    hapticsImpactLight();
  }

  onTap() {
    const hapticsImpactMedium = async () => {
      await Haptics.impact({ style: ImpactStyle.Medium });
    };

    hapticsImpactMedium();
  }
}
