import {Component, Optional} from '@angular/core';
import {ManifestService} from '@scion/microfrontend-platform';
import {Observable} from 'rxjs';
import {WorkbenchRouter, WorkbenchViewCapability} from '@scion/workbench-client';
import {WorkbenchView} from '@scion/workbench';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent {

  public viewCapabilities$: Observable<WorkbenchViewCapability[]>;

  constructor(manifestService: ManifestService,
              private workbenchClientRouter: WorkbenchRouter,
              @Optional() private view: WorkbenchView) {
    this.viewCapabilities$ = manifestService.lookupCapabilities$({type: 'view'});
  }

  public onTileClick(viewCapability: WorkbenchViewCapability): void {
    this.workbenchClientRouter.navigate(viewCapability.qualifier, {selfViewId: this.view?.viewId, activateIfPresent: false});
  }
}
