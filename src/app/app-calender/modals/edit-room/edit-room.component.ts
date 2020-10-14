import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RootlineModalService } from 'rootline-dialog';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { RoomModel } from '../../models/room.model';
import { RoomApiService } from '../../services/room-api.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss']
})
export class EditRoomComponent implements OnInit {
  roomData: RoomModel;
  editForm: FormGroup;

  error$ = {
    roomname: "",
    capacity:""
  }
  constructor (@Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<EditRoomComponent>,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private roomApi: RoomApiService,
    private modalService:RootlineModalService) { 
    this.roomData = data;
  }

  ngOnInit(): void {
    this.closeButton = this.closeButton.bind(this);
    this.editForm = this.createForm();
    this.formService.handleFormError(this.editForm, this.error$, this.errorNameGenerator);
  }

  errorNameGenerator(type: string, owner: string) {
    switch (owner) {
      case "roomname": return "Room name is required"
      case "capacity": return "Room capacity must be greater than 0"
    }
  }

  createForm() {
    return this.formBuilder.group({
      roomname: [this.roomData.roomname, Validators.required],
      capacity:[this.roomData.capacity,Validators.compose([Validators.required,Validators.min(1)])]
    })
  }
  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (!this.editForm.valid) {
      this.formService.checkFormStatus(this.editForm);
      return;
    }

    const result = Object.assign({}, this.editForm.value);
    let room: RoomModel = result;
    room.id = this.roomData.id;
    let loaderRef = this.modalService.openConfirmationModal({
      isLoader: true,
      loaderText: "Updating room ...",
      disableClose:true
    })

    this.roomApi.updateRoom(room).subscribe(res => {
      this.roomData.roomname = res.roomname;
      this.roomData.capacity = res.capacity;
      loaderRef.close();
      this.modalService.dispose();
      this.dialogRef.close();
    }, err => {
      loaderRef.close();
      this.modalService.dispose();
        this.modalService.openConfirmationModal({
          type: "error",
          matIcon: "error_outline",
          headerText: "Unknown error occured",
          primaryButtonName: "Try again",
          primaryEvent:this.closeButton
      })
    })
  }

  closeButton() {
    this.modalService.dispose()
  }

}
