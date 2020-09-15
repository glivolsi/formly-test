import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { TestService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private testService: TestService) {}

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
        monthChange: this.test1,
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
    {
      key: 'user',
      type: 'select',

      templateOptions: {
        options: [],
        valueProp: 'name',
        labelProp: 'username',
        label: 'Utente',
        required: true,
      },
      lifecycle: {
        onInit: (form, field) => {
          //field.templateOptions.options = [this.model.user];
          this.testService.getUsers().subscribe((data) => {
            field.templateOptions.options = data;
          });
        },
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

  test1(a, b) {
    console.log('test1');
    console.log(a);
    console.log(b);
  }
}
