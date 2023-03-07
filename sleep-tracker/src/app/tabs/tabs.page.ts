import { Component } from '@angular/core';
import {Haptics, ImpactStyle} from "@capacitor/haptics";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  onTabChange() {
    const hapticsImpactLight = async () => {
      await Haptics.impact({ style: ImpactStyle.Light });
    };

    hapticsImpactLight();
  }

}
