import { Component } from '@angular/core'
import { Observable } from 'rxjs';
import { WidgetsService, Widget } from '../common/widgets.service';

@Component({
  selector: 'widgets',
  template: `
    <div class="mdl-grid widgets">
      <div class="mdl-cell mdl-cell--6-col">
        <widgets-list [widgets]="widgets | async | filterWidgets:filter"
        (selected)="selectWidget($event)"></widgets-list>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <widget-details (saved)="saveWidget($event)" [widget]="selectedWidget"></widget-details>
        <br><br>
        <input type="text" [(ngModel)]="filter" placeholder="Filter" class="mdl-textfield__input" /><br>
        <!-- <span *ngFor="let name of widgets | async | widgetNames | filterArray:filter">{{name}}, </span> -->
      </div>
    </div>
  `,
  styles: [`
    .widgets {
      padding: 20px;
    }
  `]
})
export class WidgetsComponent {
  filter: string = '';
  widgets: Observable<Widget[]>;
  selectedWidget:Widget = {id: null, name: null, price: null};

  constructor(private _widgetsService: WidgetsService) {
    this.widgets = _widgetsService.loadWidgets();
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  saveWidget(widget) {
    this._widgetsService.saveWidget(widget).subscribe(
      res => (this.widgets = this._widgetsService.loadWidgets()),
      err => console.log(err)
    );
    this.selectedWidget = {id: null, name: null, price: null};
  }
}
