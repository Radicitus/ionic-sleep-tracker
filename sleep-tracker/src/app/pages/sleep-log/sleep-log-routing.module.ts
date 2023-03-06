import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SleepLogPage } from './sleep-log.page';

const routes: Routes = [
  {
    path: '',
    component: SleepLogPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
