import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.scss'],
})
export class MyCalendarComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      inline: false,
    },
  };
}
