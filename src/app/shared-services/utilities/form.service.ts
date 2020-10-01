import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { filter, map } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  handleFormError(
    formGorup: FormGroup,
    errorObservers: object,
    errorTypeGenerator: (type: string, owner: string) => any
  ) {
    Object.keys(formGorup.controls).forEach((field) => {
      errorObservers[field] = formGorup.controls[field].statusChanges.pipe(
        filter((status) => status === 'INVALID'),
        map(() => {
          // console.log(formGorup.controls[field]);
          if (!formGorup.controls[field].errors) {
            return null;
          }
          for (let errName in formGorup.controls[field].errors) {
            let errorType = errorTypeGenerator(errName, field.toString());
            return errorType;
          }
        })
      );
    });
  }

  checkFormStatus(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      formGroup.controls[field].updateValueAndValidity();
    });
  }
}
