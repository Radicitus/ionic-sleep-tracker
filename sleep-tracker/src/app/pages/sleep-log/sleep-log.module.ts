import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SleepLogPage } from './sleep-log.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './sleep-log-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule
  ],
  declarations: [SleepLogPage]
})
export class Tab3PageModule {}
