import {Component} from '@angular/core';
import {WorkbenchView} from '@scion/workbench';

@Component({
  selector: 'app-new-tab-view',
  templateUrl: './new-tab-view.component.html',
  styleUrls: ['./new-tab-view.component.scss'],
})
export class NewTabViewComponent {

  constructor(view: WorkbenchView) {
    view.title = 'New Tab';
  }
}
