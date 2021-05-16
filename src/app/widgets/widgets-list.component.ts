import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../common/widgets.service';

@Component({
    selector: 'widgets-list',
    template: `
    <div *ngFor="let widget of widgets" (click)="selected.emit(widget)"
      class="widget-card mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">{{widget.name | uppercase}}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        {{widget.price | currency}}
      </div>
    </div>
    `
})
export class WidgetsListComponent {
  @Input() widgets: any[];
  @Output() selected: EventEmitter<Widget> = new EventEmitter<Widget>();
}
