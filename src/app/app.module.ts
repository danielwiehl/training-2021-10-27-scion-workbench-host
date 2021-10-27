import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DesktopComponent} from './desktop/desktop.component';
import {WorkbenchModule} from '@scion/workbench';
import {NewTabViewComponent} from './new-tab-view/new-tab-view.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    NewTabViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkbenchModule.forRoot({
      microfrontends: {
        platform: {
          apps: [
            {
              symbolicName: 'devtools',
              manifestUrl: '/assets/manifest-devtools.json',
              intentionCheckDisabled: true,
              scopeCheckDisabled: true,
            },
            {
              symbolicName: 'external',
              manifestUrl: '/assets/manifest-external.json',
            },
            {
              symbolicName: 'products-app',
              manifestUrl: 'http://localhost:4201/manifest.json',
            },
            {
              symbolicName: 'ssp-app',
              manifestUrl: '/assets/manifest-ssp.json',
            },
          ],
        },
      },

    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
