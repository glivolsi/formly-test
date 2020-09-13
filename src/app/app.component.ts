import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'formly-test';
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'mycalendar',
      templateOptions: {
        readonlyInput: true,
        //inline: true,
        change: this.test,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
  ];

  onSubmit(model) {
    console.log(model);
  }

  test(a, b) {
    console.log(a);
    console.log(b);
  }
}
