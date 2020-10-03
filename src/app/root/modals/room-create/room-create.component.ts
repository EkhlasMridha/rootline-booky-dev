import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RoomApiService } from '../services/room-api.service';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { StateControlService } from 'src/app/shared-services/state-control.service';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss'],
})
export class RoomCreateComponent implements OnInit {
  roomForm: FormGroup;

  error$ = {
    roomname: '',
    capacity: '',
  };
  constructor(
    private dialogRef: MatDialogRef<RoomCreateComponent>,
    private roomApi: RoomApiService,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private stateControler: StateControlService
  ) {}

  ngOnInit(): void {
    this.roomForm = this.createForm();
    this.formService.handleFormError(
      this.roomForm,
      this.error$,
      this.errorGenerator
    );
  }

  errorGenerator(type: string, owner: string) {
    switch (owner) {
      case 'roomname':
        return 'Room name is required';
      case 'capacity':
        return 'Minimum 1 capacity required';
    }
  }

  createForm() {
    return this.formBuilder.group({
      roomname: ['', Validators.required],
      capacity: [
        1,
        Validators.compose([Validators.required, Validators.min(1)]),
      ],
    });
  }

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (!this.roomForm.valid) {
      this.formService.checkFormStatus(this.roomForm);
      return;
    }

    const result = Object.assign({}, this.roomForm.value);

    console.log(result);
    this.roomApi.createRoom(result).subscribe((res) => {
      console.log(res);
      this.stateControler.sendRoomCreationSignal(res);
      this.dialogRef.close();
    });
  }
}
