import {Component} from '@angular/core';
import {MessageBoxService, WorkbenchView} from '@scion/workbench';

@Component({
  selector: 'app-host-view',
  templateUrl: './host-view.component.html',
  styleUrls: ['./host-view.component.scss'],
})
export class HostViewComponent {

  constructor(view: WorkbenchView, private messageBoxService: MessageBoxService) {
    view.title = 'Host View';
    view.heading = 'Description';
  }


  public onMessageBoxClick(): void {
    this.messageBoxService.open({
      title: 'Title',
      content: 'Hello World',
      actions: {
        yes: 'Yes',
        no: 'No',
      },
    })
  }
}
