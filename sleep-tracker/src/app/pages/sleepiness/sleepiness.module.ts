import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SleepinessPage } from './sleepiness.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './sleepiness-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [SleepinessPage]
})
export class Tab2PageModule {}
