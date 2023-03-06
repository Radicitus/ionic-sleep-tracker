import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'overnight-sleep',
        loadChildren: () => import('../overnight-sleep/overnight-sleep.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'sleepiness',
        loadChildren: () => import('../sleepiness/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'sleep-log',
        loadChildren: () => import('../sleep-log/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/overnight-sleep',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/overnight-sleep',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
