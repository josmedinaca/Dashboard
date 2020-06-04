import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alert',
        loadChildren: () => import('./adv-alert/adv-alert.module').then(module => module.AdvAlertModule)
      },
      {
        path: 'light-box',
        loadChildren: () => import('./adv-light-box/adv-light-box.module').then(module => module.AdvLightBoxModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./adv-notification/adv-notification.module').then(module => module.AdvNotificationModule)
      },
      {
        path: 'rating',
        loadChildren: () => import('./adv-rating/adv-rating.module').then(module => module.AdvRatingModule)
      },
      {
        path: 'range-slider',
        loadChildren: () => import('./adv-range-slider/adv-range-slider.module').then(module => module.AdvRangeSliderModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiAdvRoutingModule { }
