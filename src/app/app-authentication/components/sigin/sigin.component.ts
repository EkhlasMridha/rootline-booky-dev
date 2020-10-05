import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RootlineModalService } from 'rootline-dialog';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent implements OnInit {
  loginForm: FormGroup;

  errorObserver$ = {
    userName: '',
    password: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private authService: AuthService,
    private modalService: RootlineModalService
  ) {}

  ngOnInit(): void {
    this.tryAgain = this.tryAgain.bind(this);
    this.loginForm = this.createForm();
    this.formService.handleFormError(
      this.loginForm,
      this.errorObserver$,
      this.errorTypeGenerator
    );
  }

  errorTypeGenerator(type: string, owner: string) {
    switch (owner) {
      case 'userName':
        return 'User name is required';
      case 'password':
        return 'Password is required';
    }
  }

  createForm() {
    return this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.formService.checkFormStatus(this.loginForm);
      return;
    }
    const result = Object.assign({}, this.loginForm.value);

    let ref = this.modalService.openConfirmationModal({
      isLoader: true,
      loaderText: 'Attempting to login ...',
      disableClose: true,
    });

    this.authService.signin(result).subscribe(
      (res) => {
        ref.close();
        this.modalService.dispose();
      },
      (err) => {
        ref.close();
        this.modalService.dispose();
        this.errorModal();
      }
    );
  }

  errorModal() {
    this.modalService.openConfirmationModal({
      headerText: 'Invlaid username or password',
      primaryButtonName: 'Try again',
      modalWidth: '550px',
      primaryEvent: this.tryAgain,
    });
  }

  tryAgain(event) {
    this.modalService.dispose();
  }
}
