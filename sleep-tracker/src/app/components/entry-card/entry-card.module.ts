import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntryCardComponent } from './entry-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [EntryCardComponent],
  exports: [EntryCardComponent]
})
export class ExploreContainerComponentModule {}
