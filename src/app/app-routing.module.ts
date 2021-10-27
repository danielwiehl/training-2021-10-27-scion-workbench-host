import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DesktopComponent} from './desktop/desktop.component';
import {NewTabViewComponent} from './new-tab-view/new-tab-view.component';

const routes: Routes = [
  {
    path: '', component: DesktopComponent,
  },
  {
    path: 'new-tab', component: NewTabViewComponent,
  },
  {
    path: 'host-view',
    loadChildren: (): any => import('./host-view/host-view.module').then(m => m.HostViewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
