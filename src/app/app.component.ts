import {Component} from '@angular/core';
import {WorkbenchService} from '@scion/workbench';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public viewsPresent$: Observable<boolean>;

  constructor(workbench: WorkbenchService) {
    this.viewsPresent$ = workbench.views$
      .pipe(
        map(views => views.length > 0),
        distinctUntilChanged(),
      );
  }
}
