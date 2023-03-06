import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OvernightSleepPage } from './overnight-sleep.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './overnight-sleep-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [OvernightSleepPage]
})
export class Tab1PageModule {}
