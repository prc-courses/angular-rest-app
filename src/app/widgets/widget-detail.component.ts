import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Widget } from "../common/widgets.service";
import { forbiddenNameValidator } from '../common/validators';

@Component({
    selector: 'widget-details',
    template: `
  <div class="widget-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text" *ngIf="selectedWidget.id">Editing {{originalName}}</h2>
      <h2 class="mdl-card__title-text" *ngIf="!selectedWidget.id">Create New Widget</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form [formGroup]="widgetForm"
          (ngSubmit)="saved.emit(widgetForm.value)" novalidate>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Widget Name</label>
            <input formControlName="name" name="name"
              class="mdl-textfield__input" type="text">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
            <label>Widget Price</label>
            <input formControlName="price"
              class="mdl-textfield__input" type="text">
          </div>
          <button type="submit" [disabled]="!widgetForm.valid" class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Save</button>
      </form>
    </div>
  </div>
   `,
  styles: [`
    input.ng-invalid { color: red; }
  `]
})
export class WidgetDetailComponent implements OnInit {
  originalName: string;
  selectedWidget: Widget;
  widgetForm: FormGroup;
  @Output() saved = new EventEmitter();

  @Input() set widget(value: Widget) {
    if (value) this.originalName = value.name;
    this.selectedWidget = Object.assign({}, value);
    // Update form
    if (this.widgetForm) this.widgetForm.setValue(this.selectedWidget);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.widgetForm = this.fb.group({
      id: '',
      name: [this.selectedWidget.name, [Validators.required, Validators.minLength(3), Validators.maxLength(25), forbiddenNameValidator()]],
      price: [this.selectedWidget.price, [Validators.required, Validators.min(5), Validators.max(10000)]]
    });
  }
}
