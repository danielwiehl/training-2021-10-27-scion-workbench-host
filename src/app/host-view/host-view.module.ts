import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HostViewComponent} from './host-view.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HostViewComponent,
  },
]

@NgModule({
  declarations: [
    HostViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class HostViewModule {
}
